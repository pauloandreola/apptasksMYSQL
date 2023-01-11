import { Task } from "../../../entities/task";
import { connection } from "../../../../../shared/infra/services/db";

import { ICreateTaskDTO } from "../../../../dtos/ICreateTaskDTO";
import { ITasksRepository } from "../ITasksRepository";

export class TasksRepository implements ITasksRepository {
  constructor() {}

  async createTask({user_id, project, task}: ICreateTaskDTO): Promise<void> {
    const conn = await connection();
      var insertTask = conn.query(`INSERT INTO tasks (project, task, user_id) VALUES (?,?,?)`, [project, task, user_id]);
  }

  async createTaskTable(): Promise<void> {
    const conn = await connection();
      var createTable = conn.query(`CREATE TABLE IF NOT EXISTS
      tasks (
        task_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        project VARCHAR(255),
        task VARCHAR(255),
        created_at TIMESTAMP default now(),
        updated_at TIMESTAMP,
        start_date TIMESTAMP,
        end_date TIMESTAMP,
        total INT,
        user_id INT,
        CONSTRAINT FK_user_id FOREIGN KEY (user_id)
        REFERENCES users(user_id));`)
  }

  async deleteTask(task_id: string): Promise<void> {
    const conn = await connection();
    conn.query(`DELETE FROM tasks WHERE task_id = (?)`,[task_id]);
  }

  async findTaskById(task_id: string): Promise<Task> {
    const conn = await connection();
    const [taskId] = await conn.query(`SELECT * FROM tasks WHERE task_id = ?`,[task_id]);
    return taskId[0]; 
  }

  async listAllTasks(): Promise<Task[]> {
    const conn = await connection();
    const [tasks] = await conn.query(`SELECT * FROM tasks`);
    return tasks as any;
  }

  async updateTask(task_id: string, task: string): Promise<Task> {
    const conn = await connection();
    const [taskUpdate] = await conn.query(`UPDATE tasks SET task = ? WHERE task_id = ?`, [task, task_id]);
    return taskUpdate[0];
  }
}
