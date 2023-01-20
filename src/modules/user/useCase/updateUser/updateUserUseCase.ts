import { AppError } from '../../../../errors/appErrors';

import { IUsersRepository } from '../../infra/repositories/IUsersRepository';

export class UpdateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(user_id: string, name: string): Promise<void> {

    if (name.length < 3 ) {
      throw new AppError('Name is too short, insert more then 2 characters');
    }

    const user = await this.usersRepository.findById(user_id);
    if (!user) {
      throw new AppError("User not found")
    }
    await this.usersRepository.updateUser(user_id, name);
  }
}
