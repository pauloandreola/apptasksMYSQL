import { hash } from 'bcryptjs';

import { AppError } from '../../../../errors/appErrors';

import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO';
import { User } from '../../entities/user';
import { IUsersRepository } from '../../infra/repositories/IUsersRepository';

export class CreateUserUseCase {
  constructor( private usersRepository: IUsersRepository ) {}

  async execute({name, email, admin, password, confpassword, department }: ICreateUserDTO): Promise<void> {

    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }
    if (password != confpassword) {
      throw new AppError('Password is not the same');
    }
    
    const passwordHash = await hash(password, 8);

    await this.usersRepository.createUser({ name, email, admin, password :passwordHash, department });

  }
  
}
