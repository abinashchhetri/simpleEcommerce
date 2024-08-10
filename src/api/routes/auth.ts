import { Router } from 'express';
import { RouterPropsTypes } from '../types';
import Container from 'typedi';
import AuthService from '@/services/authService';

const authRouter = Router();
export default ({ router }: RouterPropsTypes) => {
  router.use('/auth', authRouter);

  authRouter.get('/getusers', async (req, res) => {
    try {
      const authService = Container.get(AuthService);
      const allUser = await authService.findUser();
      res.status(200).json({ user: allUser });
    } catch (error) {
      throw error;
    }
  });

  authRouter.post('/register', async (req, res) => {
    const { fname, lname, email, password } = req.body;

    try {
      const authService = Container.get(AuthService);

      const data = authService.registerUser({
        fname: fname,
        lname: lname,
        email: email,
        password: password,
      });
      res.status(200).json({ data: data });
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  authRouter.post('/login', (req, res) => {
    console.log(req.body);
    res.status(200).json({ body: req.body });
  });
};
