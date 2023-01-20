import { Router } from 'express';
import multer from 'multer';

import multerConfig = require('../../config/uploads');

import { EnsureAuthenticated } from '../../middlewares/ensureAuthenticated';
import { createUserController } from '../../modules/user/useCase/createUser';
import { loginUserController } from '../../modules/user/useCase/loginUser';
import { updateUserAvatarController } from '../../modules/user/useCase/updateUserAvatar';
import { updateUserController } from '../../modules/user/useCase/updateUser';

export const usersRoutes = Router();

usersRoutes.post('/register', (request, response) => createUserController.handle(request, response));

usersRoutes.get('/login', (request, response) => loginUserController.handle(request, response));

usersRoutes.use(EnsureAuthenticated);

usersRoutes.patch('/avatar/:id', multer(multerConfig).single('avatarFile'), (request, response) => updateUserAvatarController.handle(request, response));

usersRoutes.patch('/:id', (request, response) => updateUserController.handle(request, response));
 