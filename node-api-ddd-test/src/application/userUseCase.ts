import { UserRepository } from "../domain/user.repository";
import { UserValue } from "../domain/user.value";

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public registerUser = async ({ name, email, password }) => {
    const userValue = new UserValue({ name, email, password });
    const userCreated = await this.userRepository.registerUser(userValue);
    return userCreated
  }

  public getDetailUSer = async (uuid:string) => {
    const user = await this.userRepository.findUserById(uuid)
    return user
  }

  public getUserByEmail = async (email:string) => {
    const user = await this.userRepository.findUserByEmail(email)
    return user
  }
}
