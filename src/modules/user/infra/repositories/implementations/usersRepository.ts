import { v4 as uuidv4 } from 'uuid';

import { User } from "../../../entities/user";
import { connection } from "../../../../../shared/infra/services/db";

import { ICreateUserDTO } from "../../../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository"

export class UsersRepository implements IUsersRepository {
  constructor() {}

  async createUser({ name, email, admin, password, department }: ICreateUserDTO): Promise<void> {
    const conn = await connection();
    const user_id = uuidv4();
    conn.query(`INSERT INTO users (user_id, name, email, admin, password, department) VALUES (?,?,?,?,?,?)`,[user_id, name, email, admin, password, department ]);
  }

  async createUserTable(): Promise<void> { 
    const conn = await connection();
    var createTable = conn.query(`CREATE TABLE IF NOT EXISTS
      users (
        user_id VARCHAR(100) PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE,
        admin BOOLEAN,
        password VARCHAR(100),
        avatar LONGBLOB,
        department VARCHAR(20),
        created_at TIMESTAMP default now(),
        updated_at TIMESTAMP)`);
  }

  async findByEmail(email: string): Promise<User> {
    const conn = await connection();
    const [emailUser] = await conn.query(`SELECT * FROM users WHERE email = ?`,[email])
    return emailUser[0];
  }

  async findById(user_id: string): Promise<User> {
    const conn = await connection();
    const [userId] = await conn.query(`SELECT * FROM users WHERE user_id = ?`,[user_id])
    return userId[0];
  }

  async updateUserAvatar(user_id: string, avatar: string): Promise<User> {
    const conn = await connection();
    const [updateAvatar] = await conn.query(`UPDATE users SET avatar = ?, updated_at = CURRENT_TIMESTAMP WHERE user_id = ?`,[avatar, user_id]);
    return updateAvatar[0];
  }

  async updateUser(user_id: string, name: string): Promise<User> {
    const conn = await connection();
    const [updateUser] = await conn.query(`UPDATE users SET name = ?, updated_at = CURRENT_TIMESTAMP WHERE user_id = ?`,[name, user_id]);
    return updateUser[0];
  }
}
