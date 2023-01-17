import { Request, Response } from 'express';

import { CreateUserUseCase } from './createUserUseCase';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, admin, password, confpassword, department } = request.body;
      await this.createUserUseCase.execute({ name, email, admin, password, confpassword, department });
      return response.status(201).json('User created');
    } catch (error) {
      return response.status(400).json(error); 
    }
  }
}