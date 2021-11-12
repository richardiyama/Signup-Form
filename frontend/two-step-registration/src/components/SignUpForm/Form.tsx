/* eslint-disable no-nested-ternary */
import React from 'react';
import { Formiz, useForm, FormizStep } from '@formiz/core';
import { isEmail } from '@formiz/validations';
import {
  Button,
  Box,
  Heading,
  Stack,
  AspectRatio,
  Grid,
} from '@chakra-ui/react';
import { FormField } from './FormField';
import { Header } from '../Header';
import { Layout } from '../Layout';
import {ToastValues } from '../ToastValues';
import {ToastValueFail } from '../ToastValueFail';
import RegisterDataService from '../../services/register.service'
import IRegisterData from '../../types/register.type';

const PreviousButton = (props) => {
  const form = useForm({ subscribe: 'form' });

  if (form.isFirstStep) {
    return <Box />;
  }

  return (
    <Button size="sm" onClick={form.prevStep} variant="ghost" {...props}>
      Previous
    </Button>
  );
};

const NextButton = (props) => {
  const form = useForm({ subscribe: 'form' });
  return (
    <Button
      type="submit"
      size="sm"
      colorScheme="brand"
      isDisabled={
        (form.isLastStep ? !form.isValid : !form.isStepValid)
        && form.isStepSubmitted
      }
      {...props}
    >
      {form.isLastStep ? 'Submit' : 'Next'}
    </Button>
  );
};

const StepperWrapper = ({ title, children, ...rest }) => (
  <Stack {...rest}>
    {title && <Heading fontSize="md">{title}</Heading>}
    <Box bg="gray.50" p="4" borderRadius="md">
      <Grid templateColumns="1fr 2fr 1fr" alignItems="center">
        <Box>
          <PreviousButton />
        </Box>
        {children}
        <Box textAlign="right">
          <NextButton />
        </Box>
      </Grid>
    </Box>
  </Stack>
);



const Steps = (props) => {
  const form = useForm({ subscribe: 'form' });
  const spacing = 2;

  return (
    <Stack
      direction="row"
      display="flex"
      alignItems="center"
      justifyContent="center"
      spacing={spacing}
      {...props}
    >
      {form.steps?.map((step) => {
        const inactiveProps = !step.isVisited
          ? {
            bg: 'gray.100',
            color: 'gray.400',
          }
          : {};

        const visitedProps: any = step.isVisited && !step.isCurrent
          ? {
            bg: 'white',
            color: 'brand.500',
            borderColor: 'currentColor',
            as: 'button',
            type: 'button',
            onClick: () => form.goToStep(step.name),
            _hover: {
              bg: 'brand.500',
              color: 'white',
              borderColor: 'brand.500',
            },
            _focus: {
              boxShadow: 'outline',
            },
          }
          : {};

        const currentProps = step.isCurrent
          ? {
            zIndex: 1,
            bg: 'brand.500',
            color: 'white',
          }
          : {};

        return (
          <AspectRatio key={step.name} w="6" ratio={1}>
            <Box
              zIndex={0}
              borderRadius="full"
              border="2px solid transparent"
              fontWeight={step.isCurrent || step.isVisited ? 'bold' : null}
              outline="none"
              fontSize="xs"
              overflow="visible"
              transition="0.2s"
              _after={
                step.index !== 0
                  ? {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    mt: '-1px',
                    mr: '2px',
                    top: '50%',
                    right: '100%',
                    bg:
                        step.isVisited || step.isCurrent
                          ? 'brand.500'
                          : 'gray.100',
                    h: '2px',
                    w: spacing,
                  }
                  : null
              }
              {...inactiveProps}
              {...visitedProps}
              {...currentProps}
            >
              {step.index + 1}
            </Box>
          </AspectRatio>
        );
      })}
    </Stack>
  );
};

export const Form = () => {
  const myForm = useForm();
  const toastValues = ToastValues();
  const toastValueFail = ToastValueFail();

  const handleSubmit = (values) => {
    
    const data: IRegisterData = {
      name: myForm.values.name,
      email: myForm.values.email,
      password: myForm.values.password
    };

    RegisterDataService.create(data)
  .then((response: any) => {
    toastValues(values);
    console.log(response.data);
  })
  .catch((e: Error) => {
    console.log(e);
    toastValueFail(e)
  });

   
    const stepWithError = myForm.getFieldStepName('name');
    if (stepWithError) {
      myForm.goToStep(stepWithError);
    }
  }
  

  return (
    <Formiz connect={myForm} onValidSubmit={handleSubmit}>
      <Layout>
        <form noValidate onSubmit={myForm.submitStep}>
          <Header>Two Step Registration</Header>
          <FormizStep name="step1">
            <FormField name="name" label="Name" />
            <FormField
              name="email"
              label="Email"
              type="email"
              validations={[
                {
                  rule: isEmail(),
                  message: 'Not a valid email',
                },
              ]}
            />
          </FormizStep>
          <FormizStep name="step2">
          
            <FormField 
            name="password" 
            label="Password"
            type="password"
             />
          
      
            <FormField 
            name="passwordConfirm" 
            label="Confirm Password" 
            type="password"
           validations={[
              {
                rule: (value) => myForm.values.password === value,
               deps: [myForm.values.password],
                message: 'Passwords do not match',
              }
            ]}
            />
        
          </FormizStep>
         

          <Stack spacing="6" mt="8">
            
            <StepperWrapper title="Steps">
              <Steps />
            </StepperWrapper>
          </Stack>
        </form>
      </Layout>
    </Formiz>
  );
};
