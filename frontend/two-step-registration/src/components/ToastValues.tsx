import React from 'react';
import { Box, useToast } from '@chakra-ui/react';

export const ToastValues = () => {
  const toast = useToast();

  return (values) => {
    
    toast({
      title: 'Your registration was successful',
      status: 'success',
      duration: null,
      isClosable: true,
      position: 'top',
    } as any);
  };

  
};
