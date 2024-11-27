import { v4 as uuid } from "uuid";
import { UserEntity } from "./user.entity";

export class UserValue implements UserEntity {
  uuid: string;
  name: string;
  email: string;
  password: string;
  role: string;

  constructor({ name, email, password, role }: { name: string; email: string, password:string, role:string }) {
    this.uuid = uuid();
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
