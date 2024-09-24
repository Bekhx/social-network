import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRepository } from './user-repository';
import { User } from '../entities/user.entity';
import { RegisterUserType } from '../dto/register-user.dto';

@Injectable()
export class TypeORMUserRepository implements UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async registerUser(user: RegisterUserType): Promise<User> {
    const newUser = this.userRepository.create(user);
    return await this.userRepository.save(newUser);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }
}
