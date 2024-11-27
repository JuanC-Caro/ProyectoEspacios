import { UserRepository } from "../domain/user.repository";
import { UserValue } from "../domain/user.value";

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public registerUser = async ({ name, email, password, role }) => {
    const userValue = new UserValue({ name, email, password, role });
    const userCreated = await this.userRepository.registerUser(userValue);
    delete userCreated.password
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

  public updateUser = async ({ uuid, name, email, password, role }) => {
    const userValue = new UserValue({ name, email, password, role });
    userValue.setUuid(uuid)
    const user = await this.userRepository.updateUser(userValue)
    return user
  }
}
