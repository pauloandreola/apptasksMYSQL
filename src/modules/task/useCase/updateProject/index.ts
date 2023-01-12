import { TasksRepository } from "../../infra/repositories/implementations/tasksRepository";
import { UpdateProjectController } from "./updateProjectController";
import { UpdateProjectUseCase } from "./updateProjectUseCase";

const tasksRepository = new TasksRepository();
const updateProjectUseCase = new UpdateProjectUseCase(tasksRepository);
export const updateProjectController = new UpdateProjectController(updateProjectUseCase);
