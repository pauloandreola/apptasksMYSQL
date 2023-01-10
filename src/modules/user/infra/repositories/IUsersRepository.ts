import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO';
import { User } from '../../entities/user';

export interface IUsersRepository {
  createUser(data: ICreateUserDTO): Promise<void>;
  createUserTable(): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(user_id: string): Promise<User>;
  updateUser(user_id: string, name: string): Promise<User>;
  updateAvatarUser(user_id: string, avatar: string): Promise<User>;

}
