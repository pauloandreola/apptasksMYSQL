import { connection } from "../../../../../shared/infra/services/db";

import { ICreateUserDTO } from "../../../../dtos/ICreateUserDTO";
import { IUsersTokensRepository } from "../IUsersTokensRepository"
import { UserTokens } from 'modules/user/entities/userTokens';

export class UsersTokensRepository implements IUsersTokensRepository {
  constructor() {}

  // async createUser({ name, email, admin, password, department }: ICreateUserDTO): Promise<void> {
  //   const conn = await connection();
  //   const token_id = uuidv4();
  //   conn.query(`INSERT INTO tokens (token_id, name, email, admin, password, department) VALUES (?,?,?,?,?,?)`,[user_id, name, email, admin, password, department ]);
  // }

  async createUserTokenTable(): Promise<UserTokens> { 
    const conn = await connection();
    const [createTable] = await conn.query(`CREATE TABLE IF NOT EXISTS
      tokens (
        token_id VARCHAR(100) PRIMARY KEY NOT NULL,
        refresh_Token VARCHAR(100) NOT NULL,
        created_at TIMESTAMP default now(),
        expire_date TIMESTAMP,
        user_token_id VARCHAR(100),
        CONSTRAINT FK_user_token_id FOREIGN KEY (user_token_id)
        REFERENCES users(user_id));`);

    return createTable[0];    
  }

}
