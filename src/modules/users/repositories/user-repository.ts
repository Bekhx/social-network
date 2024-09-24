import { User } from '../entities/user.entity';
import { RegisterUserType } from '../dto/register-user.dto';

export abstract class UserRepository {
  abstract registerUser(user: RegisterUserType): Promise<User>;
  abstract findByEmail(email: string): Promise<User | null>;
}
