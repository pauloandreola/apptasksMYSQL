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
      const userAlreadyExist = await this.tasksRepository.findUserById(user_id);
      if (!userAlreadyExist) {
        throw new AppError("User not found")
      }
      const taskAndUserAlreadyExist = await this.tasksRepository.findUserAndTaskById(task_id, user_id);
      if (!taskAndUserAlreadyExist) {
        throw new AppError("Task doesnt exists")
      }
      
      this.tasksRepository.deleteTask(task_id);
    }
}
