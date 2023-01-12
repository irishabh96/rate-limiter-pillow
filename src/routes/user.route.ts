import { Router } from 'express';
import { users, createUser } from '../controllers/user.controller';

const userRoute = () => {
  const router = Router();

  router.get('/', users);
  router.post('/', createUser);

  return router;
};

export { userRoute };
