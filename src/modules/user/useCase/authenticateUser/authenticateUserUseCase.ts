import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';

import { AppError } from '../../../../errors/appErrors';

import { IUsersRepository } from "modules/user/infra/repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    user_id: string,
    name: string;
    email: string;
  };
  token: string;
}

export class AuthenticateUserUseCase {
  constructor( private usersRepository: IUsersRepository ) {}

  async execute({ email, password}: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email); 
    if (!user) {
      throw new AppError('Email or password incorrect');
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new AppError('Email ou password incorrect!');
    }
    const token = sign({}, process.env.JWT_PASS_AUTH ?? '', { subject: user.email, expiresIn: '1d' });

    const tokenReturn: IResponse = {
      user: {
        user_id: user.user_id,
        name: user.name,
        email: user.email,
      },
      token,
    };
    return tokenReturn;

  }
}