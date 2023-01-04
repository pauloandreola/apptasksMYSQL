// import { IUserDTO } from '../../../dtos/IUserDTO';
// import { User } from '../../entities/user';

export interface IUsersRepository {
  // createUser(data: IUserDTO): Promise<void>;
  createUserTable(): Promise<void>;
  // findByEmail(email: string): Promise<User>;
  // findById(user_id: string): Promise<User>;
  // updateUser(user_id: string, name: string): Promise<User>;
}
