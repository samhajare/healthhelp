import { Repository } from 'typeorm';
import { CustomRepository } from '../decorators/custom-repository.decorator';
import { User } from './entities/user.entity';

@CustomRepository(User)
export class UserRepository extends Repository<User> {
  

  // async findByPhoneNumber(phoneNumber: string): Promise<User | null> {
  //   return this.createQueryBuilder('user').where('user.phoneNumber = :phoneNumber', { phoneNumber }).getOne();
  // }
}
