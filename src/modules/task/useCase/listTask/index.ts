import { TasksRepository } from "../../infra/repositories/implementations/tasksRepository";
import { ListTaskController } from "./listTaskController";
import { ListTaskUseCase } from "./listTaskUseCase";

const tasksRepository = new TasksRepository();
const listTaskUseCase = new ListTaskUseCase(tasksRepository);
export const listTaskController = new ListTaskController(listTaskUseCase);
