import { prisma } from '../../prisma';
import { UsersListData, UsersListRepository } from '../listUserRepository';

export class PrismaListUsersRepository implements UsersListRepository {
  async list ({store, operator}: UsersListData): Promise<Object> {

    const result = await prisma.usuarios.findMany({
      where: {
        nroloja: store,
        codigo: operator
      }
    })

    return result;
  }
}
