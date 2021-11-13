# A Two Step User SignUp Form
This application mimicks the sign up process on a app

### Step One


<img src="https://github.com/richardiyama/Signup-Form/blob/master/frontend/two-step-registration/public/step1.png" height="400" />

### Step Two

<img src="https://github.com/richardiyama/Signup-Form/blob/master/frontend/two-step-registration/public/step2.png" height="400" />


### Confirmation

<img src="https://github.com/richardiyama/Signup-Form/blob/master/frontend/two-step-registration/public/last.png" height="400" />


### Frontend deployed to netlify
https://618eeb37d13c5600adce955f--two-step-registration-app.netlify.app

### Backend deployed to heroku
https://thawing-depths-22582.herokuapp.com

### Install Packages

### Runing with Docker locally

- cd to Multi-Step-Registartion-Form folder
- Run: docker-compose up  
- The above command will start the api(backend) and frontend app

OR

- Run: npm install or yarn install or yarn add to install packages defined in the package.json file

- cd to Backend Folder
- Run: node server.js or npm run dev to start the server.

- cd to Frontend Folder
- Run: npm start to start React app


### The Frontend(Client Side) was built with
- [React](https://reactjs.org/) - React Framework
- [Chakra UI](https://chakra-ui.com/) - Simple, modular and accessible component library that gives you the building blocks you need to build your React       applications.
- [Formiz](https://formiz-react.com/) - React forms with ease! Composable, headless & with built-in multi steps and also comes with a validator

# The Server Side(Backend) was built with
- [Mysql(phpmyadmin)](https://www.phpmyadmin.net/) - A relational Sql Database
- [Nodejs](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Sequelize ORM](https://sequelize.org/) - a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.

- The frontend and backend were dockerize into an image for easy deployment


