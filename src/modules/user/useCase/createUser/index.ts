import { UsersRepository } from "../../infra/repositories/implementations/usersRepository";
import { CreateUserController } from "./createUserController";
import { CreateUserUseCase } from "./createUserUseCase";

const usersRepository = new UsersRepository();
const createUserUseCase = new CreateUserUseCase(usersRepository);
export const createUserController = new CreateUserController(createUserUseCase);