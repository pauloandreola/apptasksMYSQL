import { AppError } from "../../../../errors/appErrors";
import { Task } from "../../entities/task";

import { ITasksRepository } from "../../infra/repositories/ITasksRepository";

export class DeleteTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}
    async execute(user_id: string, task_id: string): Promise<any> {
      const taskAlreadyExist = await this.tasksRepository.findTaskById(task_id);

      if (!taskAlreadyExist) {
        throw new AppError("Task not found")
      }
      // if (user_id != '1') {
      //   throw new AppError("Delete denied")
      // }
      this.tasksRepository.deleteTask(task_id);
    }
}
