import { AppError } from "../../../../errors/appErrors";
import { Task } from "../../entities/task";

import { ITasksRepository } from "../../infra/repositories/ITasksRepository";

export class ListAllTasksByUserUseCase {
  constructor(private tasksRepository: ITasksRepository) {}
  async execute( user_id ): Promise<Task> {
    const userAlreadyExist = await this.tasksRepository.findUserById( user_id );
    if (!userAlreadyExist) {
      throw new AppError("User not found")
    }
    const task = await this.tasksRepository.listAllTasksByUserId( user_id);
    if (!task) {
      throw new AppError("Task or user not found");
    }
    return task as any;
  }
}
