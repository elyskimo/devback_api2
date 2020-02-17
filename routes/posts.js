const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../models/userModel');


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

router.get('/', verify, (req,res) => {
  console.log(req.headers);
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

router.get('/:id', (req,res) => {

});

router.post('/add', (req,res) => {

});

router.put('/edit/:id', (req,res) => {

});

router.delete('/delete/:id', (req,res) => {

})


module.exports = router;
