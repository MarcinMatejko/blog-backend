const Post = require('../models/Post');

// @desc   Get all posts
// @route  /api/v1/posts
// @access Public

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();

    return res.status(200).json({
      succes: true,
      count: posts.length,
      data: posts
    })
  } catch (err) {
    return res.status(500).json({
      succes: false,
      error: 'Server Error'
    });
  }
}

// @desc   Add post
// @route  POST /api/v1/posts
// @access Public

exports.addPost = async (req, res, next) => {
  try {
    const { title, text } = req.body;

    const post = await Post.create(req.body);

    return res.status(201).json({
      succes: true,
      data: post
  });
  } catch (err) {
    if(err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        succes: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        succes: false,
        error: 'Server Error'
      });
    }
  }
}

// @desc   Delete post
// @route  DELETE /api/v1/posts
// @access Public

exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if(!post) {
      return res.status(404).json({
        succes: false,
        error: 'No post found'
      });
    }

    await post.remove();

    return res.status(200).json({
      succes: true,
      data: {}
    });
     
  } catch (err) {
    return res.status(500).json({
      succes: false,
      error: 'Server Error'
    });
  }
}