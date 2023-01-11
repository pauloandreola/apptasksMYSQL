
import { AppError } from "../../../../errors/appErrors";
import { Task } from "../../entities/task";

import { ITasksRepository } from "../../infra/repositories/ITasksRepository";

export class UpdateTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}
  async execute(task_id: string, task: string): Promise<any> {
    const taskAlreadyExist = await this.tasksRepository.findTaskById(task_id);

    if (!taskAlreadyExist) {
      throw new AppError("Task not found")
    }
    this.tasksRepository.updateTask(task_id, task);
  }
}
