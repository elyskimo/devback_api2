const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../models/userModel');
const Post = require('../models/postModel');


/**
 * @api {get} /api/posts Get Posts
 * @apiName GetPosts
 * @apiGroup Posts
 *
 * @apiParam {String} title titre du texte
 * @apiParam {String} text  contenu du texte
 *
 * @apiParamExample Example Body:
 * {
 *   "titre1": "Freddie Mercury",
 *   "text1": "Je suis medecin"
 * }
 * {
 *   "titre2": "Le temps",
 *   "text2": "Le ciel est bleu"
 * }
 * {
 *   "titre3": "Bordeaux",
 *   "text3": "Il fait beau"
 * }
 *
 * @apiSuccessExample Success
 * {
 *   "id": 4,
 *   "title4": "Freddie Mercury",
 *   "text4": "example@example.corm",
 * }
 */
router.get('/', verify, async (req,res) => {

  // const user = await User.findOne({ _id: req.user }).catch((err) => {console.log(err);});
  // const posts = await Post.find().catch((err) => {console.log(err);});
  // res.sendFile('C:/Users/Eva/Desktop/My stuff/Ynov/Bachelor3/devback_api2/templates/posts.html');

  Post.find({}, function(err, posts) {
    let postMap = {};

    posts.forEach(function(post) {
      postMap[post._id] = post;
    });

    res.send(postMap);
  });

});

/**
 * @api {get} /api/posts/:id Get Posts by Id
 * @apiName GetPostsId
 * @apiGroup Posts
 *
 *
 *
 * @apiParamExample Example Body for id=1:
 * {
 *   "titre1": "Freddie Mercury",
 *   "text1": "Je suis medecin"
 * }
 *
 *
 * @apiSuccess {Number} id Post id
 * @apiSuccess {String} title Post title
 * @apiSuccess {String} text Post text
 *
 *
 * @apiSuccessExample Success
 * {
 *   "id": 4,
 *   "title4": "Météo",
 *   "text4": "Il pleut",
 * }
 */

router.get('/:id', verify, async (req,res,next) => {

    const post = await Post.find({_id: req.params.id}).catch(next);
    res.send(post);
});



/**
 * @api {post} /api/posts/add Add Posts
 * @apiName AddPosts
 * @apiGroup Posts
 *
 * @apiParam String} title titre du texte
 * @apiParam String} text contenu du texte
 *
 * @apiParamExample Example Body:
 * {
 *   "titre1": "Freddie Mercury",
 *   "text1": "Je suis medecin"
 * }
 *
 *
 * @apiSuccess {Number} id Post id
 * @apiSuccess {String} title Post title
 * @apiSuccess {String} text Post text
 *
 *
 * @apiSuccessExample Success
 * {
 *   "id": 4,
 *   "title4": "Météo",
 *   "text4": "Il pleut",
 * }
 */

router.post('/add', verify, async (req,res) => {
    if( !req.body.title || req.body.title === '' ||
        !req.body.text || req.body.text === '')
      {
        let err = new Error('Please fill all the inputs');
        return next(err);
      }
    Post.collection.insert(req.body).then(() => {
      res.redirect('/api/posts');
    }).catch(next);
});

/**
 * @api {put} /api/posts/edit/:id Put Posts
 * @apiName PutPosts
 * @apiGroup Posts
 *
 * @apiParam String} title titre du texte
 * @apiParam String} text contenu du texte
 *
 * @apiParamExample Example Body:
 * {
 *   "titre1": "Freddie Mercury",
 *   "text1": "Je suis medecin"
 * }
 *
 *
 * @apiSuccess {Number} id Post id
 * @apiSuccess {String} title Post title
 * @apiSuccess {String} text Post text
 *
 *
 * @apiSuccessExample Success
 * {
 *   "id": 4,
 *   "title4": "Météo",
 *   "text4": "Il pleut",
 * }
 */

router.put('/edit/:id', verify, async (req,res,next) => {
    Post.updateOne({_id: req.params.id}, {title: req.body.title, text: req.body.text }).then(() => {
      res.redirect('/api/posts');
    }).catch(next);
});

/**
 * @api {post} /api/posts/delete/:id Delete Posts
 * @apiName DeletePosts
 * @apiGroup Posts
 *
 * @apiParam String} title titre du texte
 * @apiParam String} text contenu du texte
 *
 * @apiParamExample Example Body:
 * {
 *   "titre": "Freddie Mercury",
 *   "text": "Je suis medecin"
 * }
 *
 *
 * @apiSuccess {String} title Post title
 * @apiSuccess {String} text Post text
 *
 *
 * @apiSuccessExample Success
 * {
 *   "_id": "5e4aca4cf1040342ecadb141",
 *   "title": "Météo",
 *   "text": "Il pleut",
 * }
 */

router.delete('/delete/:id', verify, async (req,res) => {
   let id = req.params.id;
    Post.findByIdAndDelete(id).then(() => {
      res.redirect('/api/posts');
    }).catch(next);
});
module.exports = router;
