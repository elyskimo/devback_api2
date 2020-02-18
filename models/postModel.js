const mongoose = require('mongoose');

/**
 * @api {PostModel}  Model Post
 * @apiName PostModel
 * @apiGroup MongoDb
 *
 * @apiParam {String} title titre d'un post
 * @apiParam {String} text  contenu du post
 *
 *
 *
 */

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    max: 255
  },
  text: {
    type: String,
    required: true
  }
}, { collection: 'posts' });

module.exports = mongoose.model('Post',postSchema);
