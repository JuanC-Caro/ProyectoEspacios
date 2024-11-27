import { ReservationEntity } from "./reservation.entity";

export interface ReservationRepository {
  findReservationById(uuid: string): Promise<ReservationEntity | null>;
  findReservationsByUserId(userId: string): Promise<ReservationEntity[] | null>;
  findReservationsBySpaceId(spaceId: string): Promise<ReservationEntity[] | null>;
  createReservation(reservation: ReservationEntity): Promise<ReservationEntity | null>;
  updateReservation(uuid: string, reservation: ReservationEntity): Promise<ReservationEntity | null>;
  deleteReservation(uuid: string): Promise<boolean>;
}

