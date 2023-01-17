import { Request, Response } from 'express';
import { CreateTaskUseCase } from './createTaskUseCase';

export class CreateTaskController {
  constructor(private createTaskUseCase: CreateTaskUseCase) {}
  
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const id = request.params.id;
      const { project, task } = request.body;
      await this.createTaskUseCase.execute({ user_id: id, project, task });
      return response.status(201).json('Task created');
    } catch (error) {
      return response.status(400).json(error); 
    }
  }
}
