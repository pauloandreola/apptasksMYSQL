import { ICreateTaskDTO } from "../../../dtos/ICreateTaskDTO";
import { Task } from "../../entities/task";

export interface ITasksRepository {
  createTask(data: ICreateTaskDTO): Promise<void>;
  createTaskTable(): Promise<void>;
  deleteTask(task_id: string): Promise<void>;
  findTaskById(task_id: string): Promise<Task>;
  listAllTasks(): Promise<Task[]>;
  updateTask(task_id: string, task: string): Promise<Task>;
}
