import { UsersRepository } from "../../infra/repositories/implementations/usersRepository";
import { AuthenticateUserController } from "./authenticateUserController";
import { AuthenticateUserUseCase } from "./authenticateUserUseCase";

const usersRepository = new UsersRepository();
const authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository);
export const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase);