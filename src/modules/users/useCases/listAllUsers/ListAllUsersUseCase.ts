import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({user_id}: IRequest): User[] {
    const admin = this.usersRepository.findById(user_id)

    if (!admin) throw new Error('User does not exist');

    if (!admin.admin) throw new Error('User is not an admin');

    return this.usersRepository.list()
  }
}

export { ListAllUsersUseCase };
