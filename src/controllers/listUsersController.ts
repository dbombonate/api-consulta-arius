import { Request, Response } from 'express'
import { PrismaListUsersRepository } from '../repositories/prisma/prismaListUsersRepository';
import { ListUserUseCase } from '../usecase/listUsersUseCase';

class ListUsersController {
  async handle(req: Request, res: Response) {

    if (Object.keys(req.query).length === 0) return res.send({ message: "API de validação de usuário ARIUS" })

    const store = Number(req.query.store);
    const operator = Number(req.query.operator);

    const prismaListUsersRepository = new PrismaListUsersRepository();

    const listUsersUseCase = new ListUserUseCase(
      prismaListUsersRepository
    );

    const response = await listUsersUseCase.execute({
      store,
      operator
    })

    return res.status(response).send();
  }
};

export default new ListUsersController();
