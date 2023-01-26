import { AppError } from "../../../../errors/appErrors";
import { Task } from "../../entities/task";

import { ITasksRepository } from "../../infra/repositories/ITasksRepository";

export class ListTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}
  async execute( user_id, task_id ): Promise<Task> {
    const taskAlreadyExist = await this.tasksRepository.findTaskById( task_id );
    if (!taskAlreadyExist) {
      throw new AppError("Task not found")
    }
    const userAlreadyExist = await this.tasksRepository.findUserById( user_id );
    if (!userAlreadyExist) {
      throw new AppError("User not found")
    }
    const task = await this.tasksRepository.findUserAndTaskById( user_id, task_id );
    if (!task) {
      throw new AppError("Task or user not found");
    }
    return task;
  }
}
