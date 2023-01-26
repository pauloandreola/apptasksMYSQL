import { Request, Response } from "express";

import { ListAllTasksByUserUseCase } from "./listAllTasksByUserUseCase";

export class ListAllTasksByUserController {
  constructor(private listAllTasksByUserUseCase: ListAllTasksByUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const user_id = request.params.id;
      const task = await this.listAllTasksByUserUseCase.execute(user_id);
      return response.json(task).status(302);
    } catch (error) {
      return response.status(404).json(error);
    }
  }
}
