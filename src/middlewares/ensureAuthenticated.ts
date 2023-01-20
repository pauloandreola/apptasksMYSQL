import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '../errors/appErrors';
import { UsersRepository } from '../modules/user/infra/repositories/implementations/usersRepository';

interface IPayload {
  subject: string;
}

export async function EnsureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError('Token missing!', 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { subject: user_id } = verify(token, process.env.JWT_PASS ?? '') as IPayload;
    
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);
    if (!user) {
      throw new AppError('User does not exists!', 401);
    }

     request.user = {
       id: user_id,
     };

    next();
  } catch {
    throw new AppError('Invalid token!', 401);
  }
}
