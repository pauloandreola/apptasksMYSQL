import { v4 as uuidv4 } from 'uuid';

import { User } from "../../../entities/user";
import { connection } from "../../../../../shared/infra/services/db";

import { ICreateUserDTO } from "../../../../dtos/ICreateUserDTO";
import { IUsersTokenRepository } from "../IUsersTokenRepository"

export class UsersTokenRepository implements IUsersTokenRepository {
  constructor() {}

  // async createUser({ name, email, admin, password, department }: ICreateUserDTO): Promise<void> {
  //   const conn = await connection();
  //   const user_id = uuidv4();
  //   conn.query(`INSERT INTO users (user_id, name, email, admin, password, department) VALUES (?,?,?,?,?,?)`,[user_id, name, email, admin, password, department ]);
  // }

  async createUserTokenTable(): Promise<void> { 
    const conn = await connection();
    var createTable = conn.query(`CREATE TABLE IF NOT EXISTS
      tokens (
        token_id VARCHAR(100) PRIMARY KEY NOT NULL,
        refresh_Token VARCHAR(100) NOT NULL,
        user_id VARCHAR(100) NOT NULL,
        created_at TIMESTAMP default now(),
        expire_date TIMESTAMP)`);
  }

}
