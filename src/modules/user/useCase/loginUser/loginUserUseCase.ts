import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'; 

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
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    
    const user = await this.usersRepository.findByEmail(email);
    const userPass = bcryptjs.compare(password, user.password);

    if (!email || !password) {
      throw new AppError('Please verify a blank field');
    }
    if (!user) {
      throw new AppError('Email or password invalid');
    }
    if(!userPass) {
      throw new AppError('Please insert email ou password correct')
    }
    
    const token = jwt.sign({id: user.user_id}, process.env.JWT_PASS ?? '', { expiresIn: '1d' });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };
    return tokenReturn;
  }
}
