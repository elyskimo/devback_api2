const mongoose = require('mongoose');

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
