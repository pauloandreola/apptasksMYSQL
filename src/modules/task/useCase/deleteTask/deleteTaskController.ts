import { Request, Response } from "express";

import { DeleteTaskUseCase } from "./deleteTaskUseCase";

export class DeleteTaskController {
  constructor(private deleteTaskUseCase: DeleteTaskUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const user_id = request.params.id;
      const { task_id } = request.body;
      await this.deleteTaskUseCase.execute(user_id, task_id);
      return response.json("Task deleted");
    } catch (error) {
      return response.status(405).json(error);
    }
  }
}
