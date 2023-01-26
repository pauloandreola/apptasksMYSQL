import { ICreateUserTokenDTO } from "modules/dtos/ICreateUserTokenDTO";
import { UserToken } from "modules/user/entities/userToken";

export interface IUsersTokensRepository {

  createUserToken(data: ICreateUserTokenDTO): Promise<UserToken>;
  createUserTokenTable(): Promise<UserToken>;
  deleteById(user_token_id: string): Promise<void>;
  findByTokenAndUserId(refresh_token: string, user_token_id: string): Promise<UserToken>;
  findByUserId(user_id: string): Promise<UserToken[]>;
  findByUserTokenId(user_token_id: string): Promise<UserToken[]>;
}
