import { AppError } from "../../../../errors/appErrors";
import { Task } from "../../entities/task";

import { ITasksRepository } from "../../infra/repositories/ITasksRepository";

export class ListTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}
  async execute(task_id: string): Promise<Task> {
    const task = await this.tasksRepository.findTaskById(task_id);

    if (!task) {
      throw new AppError("Task not found");
    }
    return task;
  }
}
