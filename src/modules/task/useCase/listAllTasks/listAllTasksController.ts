import { Request, Response } from "express";

import { ListAllTasksUseCase } from "./listAllTasksUseCase";

export class ListAllTasksController {
  constructor(private listAllTasksUseCase: ListAllTasksUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const all = await this.listAllTasksUseCase.execute();
      return response.json(all);
    } catch (error) {
      return response.status(404).json(error);
    }
  }
}
