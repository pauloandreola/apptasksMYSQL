import { connection } from "../../../../../shared/infra/services/db";

// import { IUserDTO } from "../../../../dtos/IUserDTO";
import { IUsersRepository } from "../IUsersRepository"

export class UsersRepository implements IUsersRepository {
  constructor() {}

  // async createUser({ name, email, password, department}: IUserDTO): Promise<void> {
  //   conn.connect(function(err) {
  //     if (err) throw err;
  //     var sql = `INSERT INTO
  //     users (name, email, password, department)
  //     VALUES (?,?,?,?)`
  //     conn.query(sql, function (err, result) {
  //       if (err) throw err;
  //       console.log("User included", result);
  //     });
  //   });
  //   conn.end();
  // }

  async createUserTable(): Promise<void> {
    connection.connect(function(err) {
      if (err) throw err;
      console.log("MySQL to create user table Connected!");
      var sql = `CREATE TABLE IF NOT EXISTS
      users (
        user_id VARCHAR(100) PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE,
        admin BOOLEAN,
        password VARCHAR(100),
        avatar LONGBLOB,
        department VARCHAR(50),
        created_at TIMESTAMP default now(),
        updated_at TIMESTAMP);`
      connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("If not exists user table created!");
      });
    }); 

  }

  // async findByEmail(email: string): Promise<any> {
  //   const user = conn.connect(function(err) {
  //     if (err) throw err;
  //     var sql = `SELECT * FROM users WHERE email = ?`;
  //     conn.query(sql, function (err, result) {
  //       if (err) throw err;
  //       console.log("User founded", result);
  //     });
  //   });   conn.end();

  //   return user;
  // }

  // async findById(user_id: string): Promise<any> {
  //   const user = await conn.connect(function(err) {
  //     if (err) throw err;
  //     var sql = `SELECT * FROM users WHERE id = ?`;
  //     conn.query(sql, function (err, result) {
  //       if (err) throw err;
  //       console.log("User founded", result);
  //     });
  //   });   conn.end();

  //   return user;
  // }

  // async updateUser(user_id: string, name: string): Promise<any> {
  //   const user = await conn.connect(function(err) {
  //     if (err) throw err;
  //     var sql = `UPDATE users SET name = "" WHERE users.user_id = ?`;
  //     conn.query(sql, function (err, result) {
  //       if (err) throw err;
  //       console.log("User updated", result);
  //     });
  //   });  conn.end();

  //   return user;
  // }
  
}
