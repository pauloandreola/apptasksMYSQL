import { v4 as uuidV4 } from 'uuid';
export class Task {
  'task_id': string;
  'project': string;
  'task': string;
  'created_at': Date;
  'updated_at': Date;
  'start_date': Date;
  'end_date': Date;
  'total': number;
  'user_id': string;

  constructor( task_id: string, project: string, task: string, created_at: Date, updated_at: Date, start_date: Date, end_date: Date, total: number, user_id: string ) {
    task_id: task_id;
    project: project;
    task: task;
    created_at: created_at;
    updated_at: updated_at;
    start_date: start_date;
    end_date: end_date;
    total: total;
    user_id: user_id;
    
  }
}
