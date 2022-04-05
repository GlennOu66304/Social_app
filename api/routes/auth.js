const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt');

//register

router.post('/register', async (req, res) => {

try{
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(req.body.password, salt);

  const newUser = await new User({
    username:req.body.username,
    email:req.body.email,
    password:hashedpassword
  })

  const user = await newUser.save();
  res.status(200).json(user);
} catch (err){
  res.status(500).json(err);
}

})

// login

router.post('/login', async (req, res) =>{
  try{

    // check the email 
     const user = await User.findOne({email: req.body.email});
    //  no email in the database, then return a error
     !user && res.status(404).json("User not found!");

    //  hash the password
     const validPassword = await bcrypt.compare(req.body.password,user.password);
    // password does not match, then return error
     !validPassword && res.status(404).json("password not found!");

    //  all match in the database, then send out the user
     res.status(200).json(user);



   }catch (err){
    res.status(500).json(err);
    }

})

module.exports = router