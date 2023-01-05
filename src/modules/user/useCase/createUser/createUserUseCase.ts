import { hash } from 'bcryptjs';

import { AppError } from '../../../../errors/appErrors';

import { IUserDTO } from '../../../dtos/IUserDTO';
import { IUsersRepository } from '../../infra/repositories/IUsersRepository';

export class CreateUserUseCase {
  constructor( private usersRepository: IUsersRepository ) {}

  async execute({ name, email, department, password, confpassword }: IUserDTO): Promise<void> {

    // console.log('Use case',name);
    // console.log(email);
    // console.log(password);
    // console.log(department);
    // console.log(confpassword);


    const userAlreadyExists = await this.usersRepository.findByEmail(email);

     if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    if (password != confpassword) {
      throw new AppError('Password is not the same');
    }
    
    const passwordHash = await hash(password, 8);

    // console.log('Criptografado',passwordHash);

    await this.usersRepository.createUser({ name, email, password :passwordHash, department });
  }
}
