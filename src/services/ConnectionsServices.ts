import { getCustomRepository, Repository } from "typeorm";
import { Connection } from "../entities/Connections";
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";

interface IConnectionCreate {
  admin_id?: string;
  user_id: string;
}

class ConnectionsService {
  private connectionsRepository: Repository<Connection>;

  constructor() {
    this.connectionsRepository = getCustomRepository(ConnectionsRepository);
  }

  async create({ admin_id, user_id }: IConnectionCreate) {
    const connection = this.connectionsRepository.create({
      admin_id,
      user_id,
    });

    await this.connectionsRepository.save(connection);

    return connection;
  }
}

export { ConnectionsService };
