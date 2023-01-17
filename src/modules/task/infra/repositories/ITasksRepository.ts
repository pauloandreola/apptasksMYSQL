import { ICreateTaskDTO } from "../../../dtos/ICreateTaskDTO";
import { Task } from "../../entities/task";

export interface ITasksRepository {
  createTask(data: ICreateTaskDTO): Promise<void>;
  createTaskTable(): Promise<void>;
  deleteTask(task_id: string): Promise<void>;
  endTask(task_id: string, task: string): Promise<Task>;
  findTaskById(task_id: string): Promise<Task>;
  listAllTasks(): Promise<Task[]>;
  startTask(task_id: string, task: string): Promise<Task>;
  updateProject(task_id: string, project:string): Promise<Task>;
  updateTask(task_id: string, task: string): Promise<Task>;
}
