
import { AppError } from "../../../../errors/appErrors";

import { ITasksRepository } from "../../infra/repositories/ITasksRepository";

export class UpdateProjectUseCase {
  constructor(private tasksRepository: ITasksRepository) {}
  async execute(task_id: string, project: string): Promise<any> {
    const taskAlreadyExist = await this.tasksRepository.findTaskById(task_id);

    if (!taskAlreadyExist) {
      throw new AppError("Project not found")
    }
    if (!project) {
      throw new AppError("Please insert a new Project name")
    }
    this.tasksRepository.updateProject(task_id, project);
  }
}
