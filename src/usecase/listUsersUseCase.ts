import { UsersListRepository } from "../repositories/listUserRepository";

interface ListUsersRequest{
  store: number;
  operator: number;
}

export class ListUserUseCase {
  constructor(
    private usersListRepository: UsersListRepository
  ) {}


  async execute (request: ListUsersRequest) {
    const { store, operator } = request;

    if(!store || !operator) {
      throw new Error('Send Store and Operator in query');
    }

    const list = await this.usersListRepository.list({
      store,
      operator
    });

    if (Object.entries(list).length === 0) return 400;

    return 200;

  }
}
