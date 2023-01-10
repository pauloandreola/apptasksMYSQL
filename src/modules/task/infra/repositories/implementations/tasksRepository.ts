import { connection } from "../../../../../shared/infra/services/db";

import { ICreateTaskDTO } from "../../../../dtos/ICreateTaskDTO";
import { ITasksRepository } from "../ITasksRepository";

export class TasksRepository implements ITasksRepository {
  constructor() {}

  async createTask({project, task}: ICreateTaskDTO): Promise<void> {
    const conn = await connection();
      var insertTask = conn.query(`INSERT INTO tasks (project, task) VALUES (?,?)`, [project, task]);
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

  // async deleteTask(task_id: string): Promise<void> {
  //   const conn = await connection();
  //     var sql = `DELETE FROM tasks WHERE tasks.task_id = ?`;
  //     conn.query(sql, function (err, result) {
  //       if (err) throw err;
  //       console.log("Task deleted", result);
  //     });
  //   });
  // }

  // async findById(task_id: string): Promise<any> {
  //   const task = await conn.connect(function(err) {
  //     if (err) throw err;
  //     var sql = `SELECT * FROM tasks WHERE task_id = ?`;
  //     conn.query(sql, function (err, result) {
  //       if (err) throw err;
  //       console.log("Task founded", result);
  //     });
  //   });
  //   return task; 
  // }

  // async listAllTasks(): Promise<any> {
  //   const tasks = await conn.connect(function(err) {
  //     if (err) throw err;
  //     var sql = `SELECT * FROM tasks`;
  //     conn.query(sql, function (err, result) {
  //       if (err) throw err;
  //       console.log("Tasks listed", result);
  //     });
  //   });
  //   return tasks;
  // }

  // async updateTask(task_id: string, task: string): Promise<any> {
  //   const taskupdate = await conn.connect(function(err) {
  //     if (err) throw err;
  //     var sql = `UPDATE tasks SET task = "" WHERE tasks.task_id = ?`;
  //     conn.query(sql, function (err, result) {
  //       if (err) throw err;
  //       console.log("Task updated", result);
  //     });
  //   });
  //   return taskupdate;
  // }
}
