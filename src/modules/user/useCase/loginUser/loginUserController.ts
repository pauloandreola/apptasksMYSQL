import { Request, Response } from "express";

import { LoginUserUseCase } from "./loginUserUseCase";

export class LoginUserController {
  constructor(private loginUserUseCase: LoginUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body;
      const retUser = await this.loginUserUseCase.execute({ email, password });
      return response.json(retUser).status(201);
    } catch (error) {
      return response.status(400).json(error); 
    }
  }
}
