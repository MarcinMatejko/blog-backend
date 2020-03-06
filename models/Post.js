const mongoose = require ('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Dodaj tytuł dla twojego posta']
  },
  text: {
    type: String,
    trim: true,
    required: [true, 'Dodaj treść twojego posta']
  },
  author: {
    type: String,
    trim: true,
    required: [true, 'Podaj proszę kto napisał tego posta']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Post', PostSchema);