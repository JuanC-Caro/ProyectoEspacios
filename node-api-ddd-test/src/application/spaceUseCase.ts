import { SpaceRepository } from "../domain/space.repository";
import { SpaceValue } from "../domain/space.value";

export class  SpaceUseCase {
  constructor(private readonly spaceRepository: SpaceRepository) {}

  // se crear un nuevo espacio
  public registerSpace = async ({
    spaceId,
    name,
    type,
    location
  }) => {
    const spaceValue = new SpaceValue({
      spaceId,
      name,
      type,
      location
    });
    const spaceCreated = await this.spaceRepository.createSpace(spaceValue);
    return spaceCreated;
  }

  // detalles de un espacio
  public getSpaceDetail = async (uuid: string) => {
    const space = await this.spaceRepository.findSpaceById(uuid);
    return space;
  }

}
