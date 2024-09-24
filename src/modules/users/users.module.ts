import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { TypeORMUserRepository } from './repositories/typeorm-user.repository';
import { UserRepository } from './repositories/user-repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    {
      provide: UserRepository,
      useClass: TypeORMUserRepository,
    },
    UsersService,
  ],
})
export class UsersModule {}
