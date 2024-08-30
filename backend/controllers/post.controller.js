import slugify from 'slugify';
import postModel from '../model/post.model.js';

export const createPost = async (req, res) => {
  try {
    const { title, content, user } = req.body;
    const slug = slugify(title, { lower: true });
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

export const getPosts = async (req, res) => {
  try {
    const posts = await postModel
      .find()
      .limit(10)
      .sort({ createdAt: 'asc' })
      .exec();
    res.status(200).json({
      posts,
    });
  } catch (e) {
    res.status(400).json({
      error: 'Error fetching posts',
      stack: e.stack,
    });
  }
};
