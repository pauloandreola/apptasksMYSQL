import { UsersRepository } from "../../infra/repositories/implementations/usersRepository";
import { UpdateUserController } from "./updateUserController";
import { UpdateUserUseCase } from "./updateUserUseCase";

const usersRepository = new UsersRepository();
const updateUserUseCase = new UpdateUserUseCase(usersRepository);
export const updateUserController = new UpdateUserController(updateUserUseCase);
