const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../models/userModel');

router.get('/', verify, (req,res) => {
  res.send(req.user);
  const user = User.findOne({ _id: req.user });
  // console.log(user);
  // res.json({
  //   posts: {
  //     title: 'my first post',
  //     description: 'you shouldnt see this description'
  //   }
  // });
});

module.exports = router;
