import postModel from '../model/post.model.js';

export const createPost = async (req, res) => {
  try {
    const { title, content, user, slug } = req.body;
    const post = await postModel.create({ title, content, user, slug });
    res.status(201).json({
      message: 'Post created successfully',
      post,
    });
  } catch (e) {
    res.status(400).json({
      error: 'Error creating post',
      stack: e.stack,
    });
  }
};
