import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './users.repository';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userWithUserName = {
      ...createUserDto,
      username: createUserDto.email,
    };
    return this.userRepository.save(userWithUserName);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(username: string):Promise<User> {
    return this.userRepository.findOne({ where: { username } });
  }
 
}
