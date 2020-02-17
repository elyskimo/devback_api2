const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
  title: {
    type: String,
    required: true,
    max: 255
  },
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Post',postSchema);
