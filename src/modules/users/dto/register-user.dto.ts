import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import { User } from '../entities/user.entity';

export class RegisterUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 1000, {
    message: 'fullName must be from 5 to 1000 characters long!',
  })
  @Matches(/^[a-zA-Zа-яА-Я]+$/, {
    message:
      'fullName must contain only letters. Latin/Cyrillic alphabets are accepted.',
  })
  fullName: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 128, {
    message: 'password must be from 8 to 128 characters long!',
  })
  password: string;
}

export type RegisterUserType = Pick<User, 'email' | 'fullName' | 'password'>;
