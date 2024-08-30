import { Router } from 'express';
import { createPost, getPosts } from '../controllers/post.controller.js';

const postRouter = Router();

postRouter.post('', createPost);
postRouter.get('', getPosts);

export default postRouter;
