const mongoose = require('mongoose');


/**
 * @api {UserModel} Model User
 * @apiName UserModel
 * @apiGroup MongoDb
 *
 * @apiParam {String} name name du user
 * @apiParam {String} email email du user
 * @apiParam {String} password password du user
 *
 *
 */
 
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 255
  },
  email: {
    type: String,
    required: true,
    max: 255
  },
  password: {
    type: String,
    required: true,
    min: 6
  }
}, { collection: 'users' });

module.exports = mongoose.model('User',userSchema);
