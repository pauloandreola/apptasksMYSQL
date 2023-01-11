import { Request, Response } from 'express';

import { UpdateUserAvatarUseCase } from '../updateUserAvatar/updateUserAvatarUseCase';

export class UpdateUserAvatarController {
  constructor( private updateUserAvatarUseCase: UpdateUserAvatarUseCase ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.user;
      const avatarFile = request.file?.filename;
      console.log(id);
      console.log(avatarFile);

      await this.updateUserAvatarUseCase.execute({ user_id: id, avatarFile });
      return response.status(204).send();
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}  
