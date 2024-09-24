import { Inject, Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UserRepository } from './repositories/user-repository';

@Injectable()
export class UsersService {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async registerUser(data: RegisterUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return this.userRepository.registerUser({
      email: data.email,
      fullName: data.fullName,
      password: hashedPassword,
    });
  }

  async findByEmail(email: string) {
    return await this.userRepository.findByEmail(email);
  }
}
