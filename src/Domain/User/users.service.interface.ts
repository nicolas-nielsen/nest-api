import { User } from '@Domain/User/user.entity';

export interface UsersServiceInterface {
  findAll(): Promise<User[]>;

  findOne(id: string): Promise<User | null>;

  findByEmail(email: string): Promise<User | null>;

  remove(id: number): Promise<void>;

  save(user: User): Promise<User>;
}
