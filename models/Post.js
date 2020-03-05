const mongoose = require ('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Please add a title']
  },
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add some text']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Post', PostSchema);