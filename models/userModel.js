const mongoose = require('mongoose');


/**
 * @api {UserModel}  UserModel
 * @apiName UserModel
 * @apiGroup Auth
 *
 * @apiParam {String} name name
 * @apiParam {String} email email
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
