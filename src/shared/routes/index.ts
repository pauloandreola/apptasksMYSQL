import { Router } from 'express';
import { TasksRepository } from '../../modules/task/infra/repositories/implementations/tasksRepository';
import { UsersRepository } from '../../modules/user/infra/repositories/implementations/usersRepository';
import { UsersTokensRepository } from '../../modules/user/infra/repositories/implementations/usersTokensRepository';
import { tasksRoutes } from '../routes/tasks.routes';
import { usersRoutes } from '../routes/user.routes';

export const router = Router();

const createTableUserRepository = new UsersRepository();
createTableUserRepository.createUserTable();

const createTableTaskRepository = new TasksRepository();
createTableTaskRepository.createTaskTable();

const createTableUserTokenRepository = new UsersTokensRepository();
createTableUserTokenRepository.createUserTokenTable();

router.use('/tasks', tasksRoutes);

router.use('/users', usersRoutes);
