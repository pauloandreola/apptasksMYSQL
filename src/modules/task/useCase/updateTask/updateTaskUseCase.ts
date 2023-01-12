
import { AppError } from "../../../../errors/appErrors";

import { ITasksRepository } from "../../infra/repositories/ITasksRepository";

export class UpdateTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}
  async execute(task_id: string, task: string): Promise<any> {
    const taskAlreadyExist = await this.tasksRepository.findTaskById(task_id);

    if (!taskAlreadyExist) {
      throw new AppError("Task not found")
    }
    if (!task) {
      throw new AppError("Please insert a new task")
    }
    this.tasksRepository.updateTask(task_id, task);
  }
}
