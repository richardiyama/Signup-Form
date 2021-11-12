module.exports = app => {
    const register = require("../controllers/register.controller");
  
    var router = require("express").Router();
  
    // Create a new Register
    router.post("/", register.create);
  
    
  
    app.use('/api/register', router);
  };