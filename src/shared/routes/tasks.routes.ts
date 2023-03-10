import { Router } from 'express';

import { EnsureAuthenticated } from '../../middlewares/ensureAuthenticated';
import { createTaskController } from "../../modules/task/useCase/createTask";
import { deleteTaskController } from "../../modules/task/useCase/deleteTask";
import { listAllTasksController } from '../../modules/task/useCase/listAllTasks';
import { listAllTasksByUserController } from '../../modules/task/useCase/listAllTasksByUser';
import { listTaskController } from '../../modules/task/useCase/listTask';
import { updateProjectController } from "../../modules/task/useCase/updateProject";
import { updateTaskController } from "../../modules/task/useCase/updateTask";

export const tasksRoutes = Router();

tasksRoutes.use(EnsureAuthenticated);

tasksRoutes.post('/:id', (request, response) => createTaskController.handle(request, response));

tasksRoutes.delete('/:id', (request, response) => deleteTaskController.handle(request, response));

tasksRoutes.get('/', (request, response) => listAllTasksController.handle(request, response));

tasksRoutes.get('/tasks/:id', (request, response) => listAllTasksByUserController.handle(request, response));

tasksRoutes.get('/:id', (request, response) => listTaskController.handle(request, response));

// tasksRoutes.get('/:id', (request, response) => listTaskController.handle(request, response));

tasksRoutes.patch('/project/:id', (request, response) => updateProjectController.handle(request, response));

tasksRoutes.patch('/task/:id', (request, response) => updateTaskController.handle(request, response));
