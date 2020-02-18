const router = require('express').Router(),
      express = require('express'),
      bodyParser = require('body-parser'),
      User = require('../models/userModel'),
      { registerValidation, loginValidation } = require('./validation'),
      bcrypt = require('bcryptjs'),
      jwt = require('jsonwebtoken'),
      passport = require('passport'),
      urlencodedParser = bodyParser.urlencoded({extended: false});
      const sessionStorage = require('sessionstorage');

/**
 * @api {post} /api/user/register Register User
 * @apiName RegisterUser
 * @apiGroup Authentication
 *
 * @apiParam {String} name name
 * @apiParam {String} email email
 * @apiParam {String} password password
 * @apiParam {String} password2 password2 confirmartion du password
 *
 *
 * @apiParamExample Example Body:
 * {
 *   "name": "Freddie Mercury",
 *   "email": "example@example.corm"
 *   "password": "password"
 *   "password2": "password"
 * }
 *
 *
 * @apiSuccess {String} token JWT
 *
 * @apiErrorExample Successful Reponse:
 * HTTP/1.1 400 NOT FOUND
 * {
 *   "Error": "Error"
 * }
 */

 router.get('/register', (req,res) => {
   res.sendFile(process.cwd()+'/templates/register.html');
 });

router.post('/register', async (req,res) => {
  console.log("Register");
  const { name, email, password, password2 } = req.body;
  let errors = [];

  // Validation
  const { error } = registerValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  // Checker si user existe
  const emailExist = await User.findOne({email: req.body.email});
  if(emailExist) return res.status(400).send('Email already exists');

  // Hasher le mot de passe
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
          res.redirect('/api/user/login');
        }catch(err){
          res.status(400).send(err);
        }
    });
  });
});


/**
 * @api {post} /api/user/login Login User
 * @apiName LoginUser
 * @apiGroup Authentication
 *
 * @apiParam {String} username username
 * @apiParam {String} password password
 *
 * @apiSuccess {String} token JWT
 *
 * @apiSuccessExample Successful Reponse:
 * HTTP/1.1 200 OK
 * {
 *   "token": "18927398172c hsdkucbfy voq2 3rj23.41.2,3k4hjd`x8o237c49p8123759[48c17]`"
 * }
 */

router.get('/login', (req,res,next) => {
  console.log(process.cwd());
  res.sendFile(process.cwd()+'/templates/login.html');
  // res.render('../templates/login.html');
});

router.post('/login', urlencodedParser, async (req,res,next) => {

  if(!req.body.email || !req.body.password){
    res.send("Please fill both inputs");
  } else {
    passport.authenticate('local', (err,user,info) => {
      if (err || !user) {
              return res.redirect('/');
      }
      // console.log(user)
      req.login(user, {session: false}, (err) => {
             if (err) {
                 res.send(err);
                 res.redirect('/');
             }
             // generate a signed son web token with the contents of user object and return it in the response
             const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '60m' });
             sessionStorage.setItem('jwt', token);
             res.redirect('/api/posts');
          });
    }) (req, res, next);
  }


});

router.get('/bye', (req,res) => {
  res.send("You are logged out");
});

/**
/**
 * @api {post} /api/user/logout Signup User
 * @apiName SignupUser
 * @apiGroup Authentication
 *
 *
 *
 *
 * @apiSuccess {String} message You arre logged out
 *
 * @apiSuccessExample Successful Reponse:
 * HTTP/1.1 201 OK
 * {
 *   "message": "success"
 * }
 */

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/api/user/bye');
});

module.exports = router;
