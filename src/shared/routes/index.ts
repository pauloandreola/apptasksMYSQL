import { Router } from 'express';
import { TasksRepository } from '../../modules/task/infra/repositories/implementations/tasksRepository';
import { UsersRepository } from '../../modules/user/infra/repositories/implementations/usersRepository';
import { tasksRoutes } from '../routes/tasks.routes';
import { usersRoutes } from '../routes/user.routes';

export const router = Router();

const createTableUserRepository = new UsersRepository();
createTableUserRepository.createUserTable();

const createTableTaskRepository = new TasksRepository();
createTableTaskRepository.createTaskTable();

router.use('/tasks', tasksRoutes);

router.use('/users', usersRoutes);

