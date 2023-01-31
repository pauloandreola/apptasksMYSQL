import { Request, Response } from "express";

import { UpdateProjectUseCase } from "./updateProjectUseCase";

export class UpdateProjectController {
  constructor(private updateProjectUseCase: UpdateProjectUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const task_id = request.params.id;
      const { project } = request.body;
      await this.updateProjectUseCase.execute(task_id, project);
      return response.status(202).json("Project updated");
    } catch (error) {
      return response.status(405).json(error);
    }
  }
}
