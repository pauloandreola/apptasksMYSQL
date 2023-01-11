import { TasksRepository } from "../../infra/repositories/implementations/tasksRepository";
import { CreateTaskController } from "./createTaskController";
import { CreateTaskUseCase } from "./createTaskUseCase";

const tasksRepository = new TasksRepository();
const createTaskUseCase = new CreateTaskUseCase(tasksRepository);
export const createTaskController = new CreateTaskController(createTaskUseCase);
