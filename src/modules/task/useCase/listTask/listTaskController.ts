import { Request, Response } from "express";

import { ListTaskUseCase } from "./listTaskUseCase";

export class ListTaskController {
  constructor(private listTaskUseCase: ListTaskUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const task_id = request.params.id;
      const task = await this.listTaskUseCase.execute(task_id);
      return response.json(task).status(302);
    } catch (error) {
      return response.status(404).json(error);
    }
  }
}
