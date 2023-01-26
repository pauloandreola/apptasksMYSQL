import { v4 as uuidv4 } from 'uuid';

import { Task } from "../../../entities/task";
import { connection } from "../../../../../shared/infra/services/db";

import { ICreateTaskDTO } from "../../../../dtos/ICreateTaskDTO";
import { ITasksRepository } from "../ITasksRepository";

export class TasksRepository implements ITasksRepository {
  constructor() {}

  async createTask({user_id, project, task}: ICreateTaskDTO): Promise<Task> {
    const conn = await connection();
    const task_id = uuidv4();
      var [insertTask] = await conn.query(`INSERT INTO tasks (task_id, project, task, user_id) VALUES (?,?,?,?)`, [task_id, project, task, user_id]);
    return insertTask[0];
  }

  async createTaskTable(): Promise<Task> {
    const conn = await connection();
    const [createTable] = await conn.query(`CREATE TABLE IF NOT EXISTS
      tasks (
        task_id VARCHAR(100) PRIMARY KEY NOT NULL,
        project VARCHAR(255),
        task VARCHAR(255),
        created_at TIMESTAMP default now(),
        updated_at TIMESTAMP,
        start_date TIMESTAMP,
        end_date TIMESTAMP,
        total INT,
        user_id VARCHAR(100),
        CONSTRAINT FK_user_id FOREIGN KEY (user_id)
        REFERENCES users(user_id));`)
    return createTable[0];  
  }

  async deleteTask(task_id: string): Promise<void> {
    const conn = await connection();
    conn.query(`DELETE FROM tasks WHERE task_id = (?)`,[task_id]);
  }

  async endTask(task_id: string, task: string): Promise<Task> {
    const conn = await connection();
    const [taskEnd] = await conn.query(`UPDATE tasks SET task = ?, end_date = CURRENT_TIMESTAMP WHERE task_id = ?`, [task, task_id]);
    return taskEnd[0];
  }

  async findUserAndTaskById(user_id: string, task_id: string): Promise<Task> {
    const conn = await connection();
    const [task] = await conn.query(`SELECT * FROM tasks WHERE user_id = ? AND task_id = ?`,[user_id, task_id]);
    return task[0]; 
  }

  async findTaskById(task_id: string): Promise<Task> {
    const conn = await connection();
    const [taskId] = await conn.query(`SELECT * FROM tasks WHERE task_id = ?`,[task_id]);
    return taskId[0];
  }

  async findUserById(user_id: string): Promise<Task> {
    const conn = await connection();
    const [userId] = await conn.query(`SELECT * FROM tasks WHERE user_id = ?`,[user_id]);
    return userId[0]; 
  }

  async listAllTasksById(user_id: string): Promise<Task[]> {
    const conn = await connection();
    const [tasks] = await conn.query(`SELECT * FROM tasks WHERE user_id = ?`,[user_id]);
    return tasks as any;
  }

  async listAllTasks(): Promise<Task[]> {
    const conn = await connection();
    const [tasks] = await conn.query(`SELECT * FROM tasks`);
    return tasks as any;
  }

  async startTask(task_id: string, task: string): Promise<Task> {
    const conn = await connection();
    const [taskStart] = await conn.query(`UPDATE tasks SET task = ?, start_date = CURRENT_TIMESTAMP WHERE task_id = ?`, [task, task_id]);
    return taskStart[0];
  }
  
  async updateProject(task_id: string, project: string): Promise<Task> {
    const conn = await connection();
    const [taskUpdate] = await conn.query(`UPDATE tasks SET project = ?, updated_at = CURRENT_TIMESTAMP WHERE task_id = ?`, [project, task_id]);
    return taskUpdate[0];
  }
  
  async updateTask(task_id: string, task: string): Promise<Task> {
    const conn = await connection();
    const [taskUpdate] = await conn.query(`UPDATE tasks SET task = ?, updated_at = CURRENT_TIMESTAMP WHERE task_id = ?`, [task, task_id]);
    return taskUpdate[0];
  }
  
}
