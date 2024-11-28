import { SpaceEntity } from "../../domain/space.entity";
import { SpaceRepository } from "../../domain/space.repository";
import SpaceModel from "../model/space.shchema";  // Importa el modelo de espacios

//Mongo Repository for Space

export class MongoSpaceRepository implements SpaceRepository {

    // Buscar un espacio
    async findSpaceById(uuid: string): Promise<any> {
        const space = await SpaceModel.findOne({ uuid });
        return space;
    }

    // Crear un nuevo espacio
    async createSpace(spaceIn: SpaceEntity): Promise<any> {
        const space = await SpaceModel.create(spaceIn);
        return space;
    }

    // Actualizar un espacio
    async updateSpace(uuid: string): Promise<any> {
        const space = await SpaceModel.findOneAndUpdate(
            { uuid },
            { new: true }  // Devuelve el documento actualizado
        );
        return space;
    }

    // Eliminar un espacio
    async deleteSpace(uuid: string): Promise<boolean> {
        const result = await SpaceModel.deleteOne({ uuid });
        return result.deletedCount > 0;
    }
}
