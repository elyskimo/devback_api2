const router = require('express').Router();
const User = require('../models/userModel');
const { registerValidation, loginValidation } = require('./validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req,res) => {
  // Validation
  const { error } = registerValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  // Checker si user existe
  const emailExist = await User.findOne({email: req.body.email});
  if(emailExist) return res.status(400).send('Email already exists');

  // Hasher le mot de passe
  // const salt = await bcrypt.gentSaltSync(10);
  // const hashedPassword = await bcrypt.hashSync(req.body.password, salt);
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(req.body.password, salt,async function(err, hash) {
        // Store hash in your password DB.
        // Créer le nouvel user
        const user = new User({
          name: req.body.name,
          email: req.body.email,
          password: hash
        });
        try{
          const savedUSer = await user.save();
          res.send(savedUSer);
        }catch(err){
          res.status(400).send(err);
        }
    });
  });
});

router.post('/login', async (req,res) => {
  const { error } = loginValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  // Checker si user existe
  const user = await User.findOne({ email: req.body.email });
  if(!user) return res.status(400).send('Email not found');

  // Checker le mot de passe
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if(!validPass) return res.status(400).send('Invalid password');

  // Créer et assigner le token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(token);

  // res.send('Logged in');
});

module.exports = router;
