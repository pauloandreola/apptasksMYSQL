import { IUsersTokensRepository } from 'modules/user/infra/repositories/IUsersTokensRepository';
import { AppError } from '../../../../errors/appErrors';
import { deleteFile } from '../../../../utils/file';

import { IUsersRepository } from '../../infra/repositories/IUsersRepository';

interface IRequest {
  user_id: string;
  avatarFile: string;
}

export class UpdateUserAvatarUseCase {
  constructor( private usersRepository: IUsersRepository ) {}

  async execute({ user_id, avatarFile }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);
    if (!user) {
      throw new AppError("User not found");
    }
   
    // const userToken = await this.usersTokensRepository.findByUserTokenId(user_id);
    // if (!userToken) {
    //   throw new AppError("User not found");
    // }

    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }
    user.avatar = avatarFile;
    await this.usersRepository.updateUserAvatar(user_id, user.avatar);
  }
}
