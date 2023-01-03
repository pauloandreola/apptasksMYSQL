import { v4 as uuidV4 } from 'uuid';

export class Task {
  'task_id': string;
  'user_id': string;
  'project': string;
  'task': string;
  'created_at': Date;
  'updated_at': Date;
  'start_date': Date;
  'end_date': Date;
  'total': number;

  constructor(task_id = uuidV4(), user_id: string, project: string, task: string, created_at: Date, updated_at: Date, start_date: Date, end_date: Date, total: number) {

    task_id: task_id;
    user_id: user_id;
    project: project;
    task: task;
    created_at: created_at;
    updated_at: updated_at;
    start_date: start_date;
    end_date: end_date;
    total: total;

  }
}
