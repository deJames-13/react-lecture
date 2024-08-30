import { Router } from 'express';
import { createPost } from '../controllers/port.controller.js';

const postRouter = Router();

postRouter.post('', createPost);

export default postRouter;
