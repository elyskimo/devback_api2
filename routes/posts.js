const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../models/userModel');
const Post = require('../models/postModel');


/**
 * @api {post} /owners/ Add Owner
 * @apiName AddOwner
 * @apiGroup Owners
 *
 * @apiParam {String} name Owner name, not unique
 * @apiParam {String} email Owner email, must be unique
 *
 * @apiParamExample Example Body:
 * {
 *   "name": "Freddie Mercury",
 *   "email": "example@example.corm"
 * }
 *
 * @apiSuccess {Number} id Owner id
 * @apiSuccess {String} name Owner Name
 * @apiSuccess {String} email Owner email
 * @apiSuccess {Objects[]} pets Array of pets objects belonging to owner
 *
 * @apiSuccessExample Success
 * {
 *   "id": 4,
 *   "name": "Freddie Mercury",
 *   "email": "example@example.corm",
 *   "pets": []
 * }
 */

router.get('/', verify, async (req,res) => {
  // console.log("POSTS");
  res.sendFile('C:/Users/Eva/Desktop/My stuff/Ynov/Bachelor3/devback_api2/templates/posts.html')
  // console.log(req.headers);
  // res.send(req.user);
  const user = await User.findOne({ _id: req.user }).catch((err) => {console.log(err);});
  const posts = await Post.find().catch((err) => {console.log(err);});
  console.log(posts);
  // res.send(posts);
  // console.log(user);
  // res.json({
  //   posts: {
  //     title: 'my first post',
  //     description: 'you shouldnt see this description'
  //   }
  // });
});

router.get('/:id', verify, (req,res) => {

});

router.post('/add', verify, (req,res) => {

});

router.put('/edit/:id', verify, (req,res) => {

});

router.delete('/delete/:id', verify, (req,res) => {

})


module.exports = router;
