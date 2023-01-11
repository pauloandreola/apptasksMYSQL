import { Router } from 'express';

import { createTaskController } from "../../modules/task/useCase/createTask";
import { deleteTaskController } from "../../modules/task/useCase/deleteTask";
import { listAllTasksController } from '../../modules/task/useCase/listAllTasks';
import { listTaskController } from '../../modules/task/useCase/listTask';
// import { updateTaskController } from "../../modules/task/useCase/updateTask";

export const tasksRoutes = Router();

tasksRoutes.post('/:id', (request, response) => createTaskController.handle(request, response));

tasksRoutes.delete('/:id', (request, response) => deleteTaskController.handle(request, response));

tasksRoutes.get('/', (request, response) => listAllTasksController.handle(request, response));

tasksRoutes.get('/:id', (request, response) => listTaskController.handle(request, response));

// tasksRoutes.put('/:id', (request, response) => updateTaskController.handle(request, response));
