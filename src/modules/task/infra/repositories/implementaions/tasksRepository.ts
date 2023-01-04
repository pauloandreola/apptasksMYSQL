import { connection } from "../../../../../shared/infra/services/db";
// import { ITaskDTO } from "../../../../dtos/ITaskDTO";
// import { Task } from "../../../entities/task";
import { ITasksRepository } from "../ITasksRepository";

export class TasksRepository implements ITasksRepository {
  constructor() {}

  // async createTask({project, task}: ITaskDTO): Promise<void> {
  //   conn.connect(function(err) {
  //     if (err) throw err;
  //     var sql = `INSERT INTO
  //     tasks (project, task)
  //     VALUES (?,?)`;
  //     conn.query(sql, function (err, result) {
  //       if (err) throw err;
  //       console.log("Task included", result);
  //     });
  //   });
  //   conn.end();
  // }

  async createTaskTable(): Promise<void> {
    connection.connect(function(err) {
      if (err) throw err;
      console.log("MySQL to create task table Connected!");
      var sql = `CREATE TABLE IF NOT EXISTS
      tasks (
        task_id VARCHAR(100) PRIMARY KEY NOT NULL,
        project VARCHAR(255),
        task VARCHAR(255),
        created_at TIMESTAMP default now(),
        updated_at TIMESTAMP,
        start_date TIMESTAMP,
        end_date TIMESTAMP,
        total INTEGER,
        user_id VARCHAR(100),
        CONSTRAINT FK_user_id FOREIGN KEY (user_id)
        REFERENCES users(user_id));`
      connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("If not exists task table created!");
      });
    });
  }

  // async deleteTask(task_id: string): Promise<void> {
  //   conn.connect(function(err) {
  //     if (err) throw err;
  //     var sql = `DELETE FROM tasks WHERE tasks.task_id = ?`;
  //     conn.query(sql, function (err, result) {
  //       if (err) throw err;
  //       console.log("Task deleted", result);
  //     });
  //   });
  //   conn.end();
  // }

  // async findById(task_id: string): Promise<any> {
  //   const task = await conn.connect(function(err) {
  //     if (err) throw err;
  //     var sql = `SELECT * FROM tasks WHERE task_id = ?`;
  //     conn.query(sql, function (err, result) {
  //       if (err) throw err;
  //       console.log("Task founded", result);
  //     });
  //   }); conn.end();

  //   return task; 
  // }

  // async listAllTasks(): Promise<any> {
  //   const tasks = await conn.connect(function(err) {
  //     if (err) throw err;
  //     var sql = `SELECT * FROM tasks `;
  //     conn.query(sql, function (err, result) {
  //       if (err) throw err;
  //       console.log("Tasks listed", result);
  //     });
  //   });  conn.end();

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
  //   });  conn.end();

  //   return taskupdate;
  // }

}
