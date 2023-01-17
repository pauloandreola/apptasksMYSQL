import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./authenticateUserUseCase";


export class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body;
      const token = await this.authenticateUserUseCase.execute({ email, password });
      return response.json(token);
    } catch (error) {
      return response.status(405).json(error);
    }
  }
}