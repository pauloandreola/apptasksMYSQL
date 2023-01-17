import bcryptjs from 'bcryptjs';
import { sign } from 'jsonwebtoken'; 

import { AppError } from "../../../../errors/appErrors";

import { IUsersRepository } from "../../infra/repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

export class LoginUserUseCase {
  constructor( private usersRepository: IUsersRepository ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    
    if (!email || !password) {
      throw new AppError('Please verify a blank field');
    }
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new AppError('Email or password invalid');
    }
    const userPass = await bcryptjs.compare(password, user.password);
    if(!userPass) {
      throw new AppError('Email or password invalid')
    }
    
    const token = sign({ subject: user.user_id }, process.env.JWT_PASS ?? '', { expiresIn: '1d' });
    console.log(token);
    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email
      },
    };
    return tokenReturn;
  }
}
