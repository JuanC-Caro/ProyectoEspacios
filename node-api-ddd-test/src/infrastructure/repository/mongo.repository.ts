/**
 * Infra! Mongo 🙌
 */
import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";
import UserModel from "../model/user.shchema"
/**
 * Mongo! 
 */
export class MongoRepository implements UserRepository {

    async findUserByEmail(email: string): Promise<any> {
        const user = await UserModel.findOne({ email });
        if (!user.password) {
            return null;
        }
        return user;
    }
    async findUserById(uuid: string): Promise<any> {
        const user = await UserModel.findOne({uuid})
        return user
    }
    async registerUser(userIn: UserEntity): Promise<any> {
        const user = await UserModel.create(userIn)
        return user
    }
    async listUser(): Promise<any> {
        const user = await UserModel.find()
        return user
    }
    async updateUser(user: UserEntity): Promise<any> {
        const updateData = { ...user };
        if (!user.password) {
            delete updateData.password;
        }
        const userUpdated = await UserModel
            .findOneAndUpdate({ uuid: user.uuid }, updateData, { new: true });
        return userUpdated;
    }
    
}