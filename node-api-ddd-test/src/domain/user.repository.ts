import { UserEntity } from "./user.entity";

export interface UserRepository {
  findUserByEmail(email: string): Promise<UserEntity | null>;
  findUserById(uuid: string): Promise<UserEntity | null>;
  registerUser(user:UserEntity): Promise<UserEntity | null>;
  listUser(): Promise<UserEntity[] | null>;
  updateUser(user:UserEntity): Promise<UserEntity | null>;
}
