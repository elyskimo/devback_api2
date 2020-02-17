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
router.get('/:id', verify, async (req,res,next) => {
    const post = await Post.find({_id: req.params.id}).catch(next);
});
router.post('/add', verify, async (req,res) => {
    if( !req.body.title || req.body.title === '' ||
        !req.body.text || req.body.text === '')
      {
        let err = new Error('Please fill all the inputs');
        return next(err);
      }
    Post.insert(req.body).then(() => {
      res.redirect('/');
    }).catch(next);
});
router.put('/edit/:id', verify, async (req,res,next) => {
    Post.update(req.params.id, req.body).then(() => {
      res.redirect('/');
    }).catch(next);
});
router.delete('/delete/:id', verify, async (req,res) => {
    Post.remove(req.params.id).then(() => {
      res.redirect('/');
    }).catch(next);
});
module.exports = router;