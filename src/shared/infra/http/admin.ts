import { v4 as uuidv4 } from 'uuid';
import { hash } from 'bcryptjs';

import { connection } from "../../infra/services/db";

export class AdminRepository {

  async createUserAdmin() {
      const conn = await connection();
      const userName = process.env.ADM_NAME;
      const userEmail = process.env.ADM_EMAIL;
      const userAdmin = true;
      const [verifyAdmin] = await conn.query(`SELECT * FROM users WHERE name = ? AND email = ? AND  admin = ?`,[ userName, userEmail, userAdmin ]);
      const admin = verifyAdmin[0];
        if(admin == undefined) { 
          const user_id = uuidv4();
          const name = process.env.ADM_NAME;
          const email = process.env.ADM_EMAIL;
          const admin = true;
          const password = await hash(process.env.ADM_PASS, 8);
          const department = 'Admin';
          var [insertUser] = await conn.query(`INSERT INTO users (user_id, name, email, admin, password, department) VALUES (?,?,?,?,?,?)`,[user_id, name, email, admin, password, department ]);
        return insertUser[0];
        } 
    };
  };
