const { register } = require("../models");
const db = require("../models");
const Register = db.register;
const Op = db.Sequelize.Op;

// Create and Save a new Register
exports.create = (req, res) => {
   // Validate request
   if (!req.body.name && !req.body.email && !req.body.password) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }


// Create a Register
const register = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };

  // Save Register in the database
  Register.create(register)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Register."
      });
    });
};