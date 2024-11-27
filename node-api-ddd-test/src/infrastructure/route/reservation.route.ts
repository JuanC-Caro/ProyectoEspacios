import { Router } from "express";
import { ReservationUseCase } from "../../application/reservationUseCase";
import { ReservationController } from "../controller/reservation.ctrl";
import { ReservationRepository } from "../repository/reservation.repository";

import { authMiddleware } from "../middleware/session";

const route = Router();

const reservationRepo = new ReservationRepository();
const reservationUseCase = new ReservationUseCase(reservationRepo);
const reservationCtrl = new ReservationController(reservationUseCase);


route.post(`/reservation`, authMiddleware, reservationCtrl.registerReservation);
route.get(`/reservation`, authMiddleware, reservationCtrl.getReservation);
route.get(`/reservations`, authMiddleware, reservationCtrl.getReservationsByUserId);

export default route;
