import { Router } from 'express';
import { authenticateUserController } from '../../../src/modules/user/useCase/authenticateUser';

export const authenticateRoutes = Router();

authenticateRoutes.post('/sessions', (request, response) => authenticateUserController.handle(request, response));