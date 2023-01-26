import { Request, Response } from "express";

import { ListTaskUseCase } from "./listTaskUseCase";

export class ListTaskController {
  constructor(private listTaskUseCase: ListTaskUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const user_id = request.params.id;
      const { task_id } = request.body;
      const task = await this.listTaskUseCase.execute(user_id, task_id);
      return response.json(task).status(302);
    } catch (error) {
      return response.status(404).json(error);
    }
  }
}
