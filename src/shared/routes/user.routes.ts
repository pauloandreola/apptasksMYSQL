import { Router } from 'express';
// import multer from 'multer';

// import uploadConfig from '../../../config/uploads';

// import { ensureAuthenticated } from '../../../middlewares/ensureAuthenticated';
import { createUserController } from '../../modules/user/useCase/createUser';
import { loginUserController } from '../../modules/user/useCase/loginUser';
// import { updateAvatarUserController } from '../useCases/updateAvatarUser';
import { updateUserController } from '../../modules/user/useCase/updateUser';

export const usersRoutes = Router();

// const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

usersRoutes.post('/register', (request, response) => createUserController.handle(request, response));

usersRoutes.get('/login', (request, response) => loginUserController.handle(request, response));

// usersRoutes.use(ensureAuthenticated);

// usersRoutes.patch('/avatar', (request, response) => updateAvatarUserController.handle(request, response));

usersRoutes.put('/:id', (request, response) => updateUserController.handle(request, response));
