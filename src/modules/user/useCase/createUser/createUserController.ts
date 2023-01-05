import { Request, Response } from 'express';

import { CreateUserUseCase } from './createUserUseCase';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, department, password, confpassword } = request.body;
      // console.log('Controller',name);
      // console.log(email);
      // console.log(password);
      // console.log(department);
      // console.log(confpassword);

      await this.createUserUseCase.execute({ name, email, department, password, confpassword });
      return response.json('User created').status(201);
    } catch (error) {
      return response.status(400).json(error); 
    }
  }
}