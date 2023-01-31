import { Request, Response } from "express";

import { UpdateTaskUseCase } from "./updateTaskUseCase";

export class UpdateTaskController {
  constructor(private updateTaskUseCase: UpdateTaskUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const task_id = request.params.id;
      const { task } = request.body;
      await this.updateTaskUseCase.execute(task_id, task);
      return response.status(202).json("Task updated");
    } catch (error) {
      return response.status(405).json(error);
    }
  }
}
