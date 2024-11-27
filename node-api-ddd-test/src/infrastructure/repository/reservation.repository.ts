import { ReservationEntity } from "../../domain/reservation.entity";
import { ReservationRepository } from "../../domain/reservation.repository";
import ReservationModel from "../model/reservation.shchema";  // Importa el modelo de reserva

//Mongo Repository for Reservationy

export class MongoReservationRepository implements ReservationRepository {

    // Buscar una reserva por ID
    async findReservationById(uuid: string): Promise<any> {
        const reservation = await ReservationModel.findOne({ uuid });
        return reservation;
    }

    // Buscar reservas de un usuario por su ID
    async findReservationsByUserId(userId: string): Promise<any> {
        const reservations = await ReservationModel.find({ userId });
        return reservations;
    }

    // Buscar reservas de un espacio por su ID
    async findReservationsBySpaceId(spaceId: string): Promise<any> {
        const reservations = await ReservationModel.find({ spaceId });
        return reservations;
    }

    // Crear una nueva reserva
    async createReservation(reservationIn: ReservationEntity): Promise<any> {
        const reservation = await ReservationModel.create(reservationIn);
        return reservation;
    }

    // Actualizar una reserva por su ID
    async updateReservation(uuid: string, reservationIn: ReservationEntity): Promise<any> {
        const reservation = await ReservationModel.findOneAndUpdate(
            { uuid },
            reservationIn,
            { new: true }  // Devuelve el documento actualizado
        );
        return reservation;
    }

    // Eliminar una reserva por su ID
    async deleteReservation(uuid: string): Promise<boolean> {
        const result = await ReservationModel.deleteOne({ uuid });
        return result.deletedCount > 0;
    }
}
