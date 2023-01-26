import { Request, Response } from 'express';

import { UpdateUserAvatarUseCase } from '../updateUserAvatar/updateUserAvatarUseCase';

export class UpdateUserAvatarController {
  constructor( private updateUserAvatarUseCase: UpdateUserAvatarUseCase ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const user_id = request.params.id;
      const avatarFile = request.file.filename;
      await this.updateUserAvatarUseCase.execute({ user_id, avatarFile });
      return response.status(202).json('Avatar updated');
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}  
