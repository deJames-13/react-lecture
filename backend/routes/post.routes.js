import { Router } from 'express';
import {
  createPost,
  getPost,
  getPosts,
} from '../controllers/post.controller.js';

const postRouter = Router();

postRouter.post('', createPost);
postRouter.get('', getPosts);
postRouter.get('/:slug', getPost);

export default postRouter;
