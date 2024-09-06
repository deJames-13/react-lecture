import { Router } from 'express';
import postRouter from './post.routes.js';
import userRouter from './user.routes.js';

const router = Router();

router.use('/posts', postRouter);
router.use('/users', userRouter);

export default router;
