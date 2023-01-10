import { UsersRepository } from "../../infra/repositories/implementations/usersRepository";
import { LoginUserController } from "./loginUserController";
import { LoginUserUseCase } from "./loginUserUseCase";

const usersRepository = new UsersRepository();
const loginUserUseCase = new LoginUserUseCase(usersRepository);
export const loginUserController = new LoginUserController(loginUserUseCase);
