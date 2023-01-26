import { ICreateTaskDTO } from "../../../dtos/ICreateTaskDTO";
import { Task } from "../../entities/task";

export interface ITasksRepository {
  createTask(data: ICreateTaskDTO): Promise<Task>;
  createTaskTable(): Promise<Task>;
  deleteTask(task_id: string): Promise<void>;
  endTask(task_id: string, task: string): Promise<Task>;
  findUserAndTaskById(user_id: string, task_id: string): Promise<Task>;
  findTaskById(task_id: string): Promise<Task>;
  findUserById(user_id: string): Promise<Task>;
  listAllTasksById(user_id): Promise<Task[]>;
  listAllTasks(): Promise<Task[]>;
  startTask(task_id: string, task: string): Promise<Task>;
  updateProject(task_id: string, project:string): Promise<Task>;
  updateTask(task_id: string, task: string): Promise<Task>;
}
