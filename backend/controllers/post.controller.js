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

export const updatePost = async (req, res) => {
  try {
    const { slug } = req.params;
    const { title, content, user } = req.body;
    const newSlug = slugify(title, { lower: true });
    const updatedPost = await postModel.findOneAndUpdate(
      { slug },
      { title, content, user, slug: newSlug },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json({
      message: 'Post updated successfully',
      post: updatedPost,
    });
  } catch (e) {
    res.status(400).json({
      error: 'Error updating post',
      stack: e.stack,
    });
  }
};

export const getPost = async (req, res) => {
  try {
    const { slug } = req.params;
    const post = await postModel.findOne({ slug });

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json({
      message: 'Post fetched successfully',
      post,
    });
  } catch (e) {
    res.status(400).json({
      error: 'Error fetching post',
      stack: e.stack,
    });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { slug } = req.params;
    const deletedPost = await postModel.findOneAndDelete({ slug });

    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json({
      message: 'Post deleted successfully',
      post: deletedPost,
    });
  } catch (e) {
    res.status(400).json({
      error: 'Error deleting post',
      stack: e.stack,
    });
  }
};
