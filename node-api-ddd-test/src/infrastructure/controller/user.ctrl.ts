import { Request, Response } from "express";
import { UserUseCase } from "../../application/userUseCase";

import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

export class UserController {
  constructor(private userUseCase: UserUseCase) {
  }

  public getUser = async ({ query }: Request, res: Response) => {
    const { uuid = '' } = query;
    const user = await this.userUseCase.getDetailUSer(`${uuid}`);
    res.send({ user });
  }
  

  public registerUser = async ({ body }: Request, res: Response) => {
 
    const passHash = await encrypt(body.password);
    body.password = passHash;

    const user = await this.userUseCase.registerUser(body);

    res.send({ user });
  }

  public loginUser = async ({ body }: Request, res: Response) => {
    const { email, password } = body;
    const user = await this.userUseCase.getUserByEmail(email);

    if (!user) {
      res.status(404).send({ message: 'User not found' });
      return;
    }
    console.log(user)

    const isPasswordValid = await verified(password, user.password);

    if (!isPasswordValid) {
      res.status(401).send({ message: 'Invalid password' });
      return;
    }

    const { uuid, name, role } = user;
    const token = generateToken({ uuid, name, email, role });

    res.send({ token, user });
  }
}
