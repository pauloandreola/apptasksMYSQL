import { Request, Response } from "express";

import { UpdateUserUseCase } from "./updateUserUseCase";

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const id = request.params.id;
      const { name } = request.body;
      await this.updateUserUseCase.execute(id, name);
      return response.json('User updated');
    } catch (error) {
      return response.status(405).json(error);
    }
  }
}
