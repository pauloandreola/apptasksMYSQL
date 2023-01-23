import { ICreateUserTokenDTO } from "modules/dtos/ICreateUserTokenDTO";
import { UserTokens } from "modules/user/entities/userTokens";


export interface IUsersTokensRepository {
  // createUser(data: ICreateUserTokenDTO): Promise<void>;
  createUserTokenTable({user_id, expires_date, refresh_token}: ICreateUserTokenDTO): Promise<UserTokens>;
}
