import { AppError } from "../../../../errors/appErrors";

import { Task } from "../../entities/task";
import { ITasksRepository } from "../../infra/repositories/ITasksRepository";

export class ListAllTasksUseCase {
  constructor(private tasksRepository: ITasksRepository) {}
  async execute(): Promise<Task[]> {
    const tasks = await this.tasksRepository.listAllTasks();

    if (!tasks) {
      throw new AppError("Tasks not found");
    }
    return tasks as any;
  }
}
