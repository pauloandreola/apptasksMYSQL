export class User {
  'user_id': string
  'name': string
  'email': string
  'admin': boolean
  'password': string
  'avatar': string
  'department': 'Development' | 'IA' | 'RPA'
  'created_at': Date
  'updated_at': Date

  constructor(user_id: string, name: string, email: string, admin: boolean, password: string, avatar: string, department: 'Development' | 'IA' | 'RPA', created_at: Date, updated_at: Date) {
    user_id: user_id;
    name: name;
    email: email;
    admin: admin;
    password: password;
    avatar: avatar;
    department: department;
    created_at: created_at;
    updated_at: updated_at;
  }

}