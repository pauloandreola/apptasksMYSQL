import { TasksRepository } from "../../infra/repositories/implementations/tasksRepository";
import { DeleteTaskController } from "./deleteTaskController";
import { DeleteTaskUseCase } from "./deleteTaskUseCase";

const tasksRepository = new TasksRepository();
const deleteTaskUseCase = new DeleteTaskUseCase(tasksRepository);
export const deleteTaskController = new DeleteTaskController(deleteTaskUseCase);