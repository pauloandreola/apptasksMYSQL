export interface ICreateUserDTO {
  user_id?: string,
  name?: string,
  email: string,
  admin?: boolean,
  password: string,
  confpassword?: string,
  avatar?: string,
  department?: "Development" | "IA" | "RPA",
  created_at?: Date,
}
