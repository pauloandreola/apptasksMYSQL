import { UsersRepository } from "../../infra/repositories/implementations/usersRepository";
import { UpdateUserAvatarController } from "./updateUserAvatarController";
import { UpdateUserAvatarUseCase } from "./updateUserAvatarUseCase";

const usersRepository = new UsersRepository();
const updateUserAvatarUseCase = new UpdateUserAvatarUseCase(usersRepository);
export const updateUserAvatarController = new UpdateUserAvatarController(updateUserAvatarUseCase);
