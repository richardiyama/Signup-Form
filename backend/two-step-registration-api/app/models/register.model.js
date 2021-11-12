module.exports = (sequelize, Sequelize) => {
    const Register = sequelize.define("register", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.STRING
      }
    });
  
    return Register;
  };