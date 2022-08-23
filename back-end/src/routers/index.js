import { Router } from 'express';
import LoginRouter from './loginRouter';

const indexRouter = Router();

indexRouter.use('/login', LoginRouter);

export default indexRouter;
