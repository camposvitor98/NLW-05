import { getCustomRepository } from "typeorm";

import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
  private usersRepository: UsersRepository;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create(email: string) {
    const userExists = await this.usersRepository.findOne({ email });

    if (userExists) {
      return userExists;
    }

    const user = this.usersRepository.create({ email });

    await this.usersRepository.save(user);

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });

    return user;
  }
}

export { UsersService };

// COMPARAR //

// import { getCustomRepository, Repository } from "typeorm";
// import { User } from "../entities/User";
// import { UsersRepository } from "../repositories/UsersRepository";

// class UsersService {
//   findByEmail(email: any) {
//     throw new Error("Method not implemented.");
//   }
//   private usersRepository: Repository<User>;

//   constructor() {
//     this.usersRepository = getCustomRepository(UsersRepository);
//   }

//   async create(email: string) {
//     const userExists = await this.usersRepository.findOne({ email });

//     if (userExists) {
//       return userExists;
//     }

//     const user = this.usersRepository.create({ email });

//     await this.usersRepository.save(user);

//     return user;
//   }
// }

// export { UsersService };
