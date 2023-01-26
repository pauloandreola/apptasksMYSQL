import { v4 as uuidv4 } from 'uuid';

import { connection } from "../../../../../shared/infra/services/db";

import { IUsersTokensRepository } from "../IUsersTokensRepository"
import { UserToken } from 'modules/user/entities/userToken';
import { ICreateUserTokenDTO } from 'modules/dtos/ICreateUserTokenDTO';

export class UsersTokensRepository implements IUsersTokensRepository {
  constructor() {}

  async createUserToken({ refresh_token, expires_date, user_token_id }: ICreateUserTokenDTO): Promise<UserToken> {
    const conn = await connection();
    const token_id = uuidv4();
      var [insertUserToken] = await conn.query(`INSERT INTO tokens (token_id, refresh_token, created_at, expires_date, user_token_id) VALUES (?,?,CURRENT_TIMESTAMP,?,?)`,[token_id, refresh_token, expires_date, user_token_id ]);
    return insertUserToken[0];
  }

  async createUserTokenTable(): Promise<UserToken> { 
    const conn = await connection();
    const [createTable] = await conn.query(`CREATE TABLE IF NOT EXISTS
      tokens (
        token_id VARCHAR(100) PRIMARY KEY NOT NULL,
        refresh_token VARCHAR(255) NOT NULL,
        created_at TIMESTAMP default now(),
        expires_date TIMESTAMP,
        user_token_id VARCHAR(100),
        CONSTRAINT FK_user_token_id FOREIGN KEY (user_token_id)
        REFERENCES users(user_id));`);
    return createTable[0];    
  }

  async deleteById(user_token_id: string): Promise<void> {
    const conn = await connection();
    conn.query(`DELETE FROM tokens WHERE user_token_id = (?)`,[user_token_id]);
  }

  async findByTokenAndUserId(refresh_token: string, user_token_id: string): Promise<UserToken> {
    const conn = await connection();
    const [tokenAndUserId] = await conn.query(`SELECT * FROM tokens WHERE refresh_token = ? AND user_token_id = ?`,[refresh_token, user_token_id])
    return tokenAndUserId[0];
  }
  async findByUserId(user_id: string): Promise<UserToken[]> {
    const conn = await connection();
    const [UserId] = await conn.query(`SELECT * FROM tokens WHERE user_id = ?`,[user_id])
    return UserId[0];
  }

  async findByUserTokenId(user_token_id: string): Promise<UserToken[]> {
    const conn = await connection();
    const [userId] = await conn.query(`SELECT * FROM tokens WHERE user_token_id = ?`,[user_token_id])
    return userId[0];
  }

}
