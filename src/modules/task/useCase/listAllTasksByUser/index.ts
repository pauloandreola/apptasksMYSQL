import { TasksRepository } from "../../infra/repositories/implementations/tasksRepository";
import { ListAllTasksByUserController } from "./listAllTasksByUserController";
import { ListAllTasksByUserUseCase } from "./listAllTasksByUserUseCase";

const tasksRepository = new TasksRepository();
const listAllTasksByUserUseCase = new ListAllTasksByUserUseCase(tasksRepository);
export const listAllTasksByUserController = new ListAllTasksByUserController(listAllTasksByUserUseCase);
