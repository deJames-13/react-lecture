import { Router } from 'express';
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from '../controllers/post.controller.js';

const postRouter = Router();

postRouter.post('', createPost);
postRouter.get('', getPosts);
postRouter.get('/:slug', getPost);
postRouter.put('/:slug', updatePost);
postRouter.delete('/:slug', deletePost);

export default postRouter;
