import { Router } from 'express';
import LoginController from '../controllers/LoginController';

export default Router()
  .post('/', LoginController.findUser);
