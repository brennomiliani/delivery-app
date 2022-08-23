import { StatusCodes } from 'http-status-codes';
import loginService from '../services/loginService';

const findUser = async (req, res) => {
  const token = await loginService.findUser(req.body);
  return res.status(StatusCodes.OK).json({ token });
};

export default { findUser };
