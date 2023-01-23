export interface ICreateUserDTO {
  name: string,
  email: string,
  admin: boolean,
  password: string,
  confpassword?: string,
  avatar?: string,
  department?: "Development" | "IA" | "RPA",
}
