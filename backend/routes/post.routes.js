import { Router } from 'express';
import { createPost, getPosts, getPost, updatePost, deletePost } from '../controllers/post.controller.js';

const postRouter = Router();

postRouter.post('', createPost);
postRouter.get('', getPosts);
postRouter.get('/:slug', getPost);
postRouter.put('/:slug', updatePost);
postRouter.delete('/:slug', deletePost);

export default postRouter;
