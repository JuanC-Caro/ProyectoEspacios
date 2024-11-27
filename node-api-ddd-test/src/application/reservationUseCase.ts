import { ReservationRepository } from "../domain/reservation.repository";
import { ReservationValue } from "../domain/reservation.value";

export class ReservationUseCase {
  constructor(private readonly reservationRepository: ReservationRepository) {}

  // se crear una nueva reserva
  public registerReservation = async ({
    spaceId,
    userId,
    reservationDate,
    startTime,
    endTime,
    reservationReason,
    status,
    reservationType,
  }) => {
    const reservationValue = new ReservationValue({
      spaceId,
      userId,
      reservationDate,
      startTime,
      endTime,
      reservationReason,
      status,
      reservationType,
    });
    const reservationCreated = await this.reservationRepository.createReservation(reservationValue);
    return reservationCreated;
  }

  // detalles de una reserva por ID
  public getReservationDetail = async (uuid: string) => {
    const reservation = await this.reservationRepository.findReservationById(uuid);
    return reservation;
  }

  // todas las reservas de un usuario
  public getReservationsByUserId = async (userId: string) => {
    const reservations = await this.reservationRepository.findReservationsByUserId(userId);
    return reservations;
  }
}
