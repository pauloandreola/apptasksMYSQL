import { connection } from "../../../../../shared/infra/services/db";

import { ICreateUserDTO } from "../../../../dtos/ICreateUserDTO";
import { User } from "../../../entities/user";
import { IUsersRepository } from "../IUsersRepository"

export class UsersRepository implements IUsersRepository {
  constructor() {}

  async createUser({ name, email, admin, department, password }: ICreateUserDTO): Promise<void> {
    const conn = await connection();
    var insertUser = conn.query(`INSERT INTO users (name, email, department, admin, password) VALUES (?,?,?,?,?)`, [ name, email, admin, department, password ]);
  }

  async createUserTable(): Promise<void> { 
    const conn = await connection();
    var createTable = conn.query(`CREATE TABLE IF NOT EXISTS
      users (
        user_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE,
        admin BOOLEAN,
        password VARCHAR(100),
        avatar LONGBLOB,
        department VARCHAR(50),
        created_at TIMESTAMP default now(),
        updated_at TIMESTAMP)`);
  }

  async findByEmail(email: string): Promise<User> {
    const conn = await connection();
    const [emailUser] = await conn.query(`SELECT * FROM users WHERE email = ?`, [email])
    return emailUser[0];
  }

  async findById(user_id: string): Promise<User> {
    const conn = await connection();
    const [userId] = await conn.query(`SELECT * FROM users WHERE user_Id = ?`, [user_id])
    return userId[0];
  }

  async updateAvatarUser(user_id: string, avatar: string): Promise<User> {
    const conn = await connection();
    const [updateAvatar] = await conn.query(`UPDATE users.user_Id SET avatar = ? WHERE users.user_id = ?`,[user_id, avatar]);
    return updateAvatar[0];
  }

  async updateUser(user_id: string, name: string): Promise<User> {
    const conn = await connection();
    const [updateUser] = await conn.query(`UPDATE users.user_Id SET name = ? WHERE users.user_id = ?`,[user_id, name]);
    return updateUser[0];
  }
}
