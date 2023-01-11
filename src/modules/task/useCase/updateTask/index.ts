import { TasksRepository } from "../../infra/repositories/implementations/tasksRepository";
import { UpdateTaskController } from "./updateTaskController";
import { UpdateTaskUseCase } from "./updateTaskUseCase";

const tasksRepository = new TasksRepository();
const updateTaskUseCase = new UpdateTaskUseCase(tasksRepository);
export const updateTaskController = new UpdateTaskController(updateTaskUseCase);
