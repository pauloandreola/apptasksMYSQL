import { AppError } from '../../../../errors/appErrors';
import { ICreateTaskDTO } from "../../../dtos/ICreateTaskDTO";
import { ITasksRepository } from "../../infra/repositories/ITasksRepository";

export class CreateTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}
  async execute({ user_id, project, task  }: ICreateTaskDTO): Promise<void> {

    if (user_id.length != 36  ) {
      throw new AppError('User is not valid number');
    }
    if (!project || !task ) {
      throw new AppError('Please verify a blank field');
    }
    
    await this.tasksRepository.createTask({ user_id, project, task });
  }
}
