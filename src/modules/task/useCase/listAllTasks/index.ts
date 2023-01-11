import { TasksRepository } from "../../infra/repositories/implementations/tasksRepository";
import { ListAllTasksController } from "./listAllTasksController";
import { ListAllTasksUseCase } from "./listAllTasksUseCase";

const tasksRepository = new TasksRepository();
const listAllTasksUseCase = new ListAllTasksUseCase(tasksRepository);
export const listAllTasksController = new ListAllTasksController(listAllTasksUseCase);
