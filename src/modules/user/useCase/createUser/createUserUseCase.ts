import { hash } from 'bcryptjs';
import * as EmailValidator from 'email-validator';

import { AppError } from '../../../../errors/appErrors';

import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO';
import { User } from '../../entities/user';
import { IUsersRepository } from '../../infra/repositories/IUsersRepository';

export class CreateUserUseCase {
  constructor( private usersRepository: IUsersRepository ) {}

  async execute({name, email, admin, password, confpassword, department }: ICreateUserDTO): Promise<void> {

    if (!name || !email || !password || !confpassword || !department) {
      throw new AppError('Please verify a blank field');
    }
    if (name.length < 3 ) {
      throw new AppError('Name is too short');
    }
    if (password.length < 6 ) {
    throw new AppError('Password is too short');
    }
    if (password != confpassword) {
      throw new AppError('Password is not the same');
    }
    if (!EmailValidator.validate(email)) {
      throw new AppError('Invalid e-mail');
    }
   
    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists) {
      throw new AppError('User already exists');
    }
    
    const passwordHash = await hash(password, 8);

    await this.usersRepository.createUser({ name, email, admin, password :passwordHash, department });

  }
  
}
