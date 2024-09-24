import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('users/')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  async register(@Body() registerUserDto: RegisterUserDto) {
    const existingUser = await this.usersService.findByEmail(
      registerUserDto.email,
    );

    if (existingUser) {
      throw new BadRequestException('User with this email already exists.');
    }

    return await this.usersService.registerUser(registerUserDto);
  }
}
