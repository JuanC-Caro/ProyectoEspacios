import { Request, Response } from "express";
import { ReservationUseCase } from "../../application/reservationUseCase";

export class ReservationController {
  constructor(private reservationUseCase: ReservationUseCase) {}


  public getReservation = async ({ query }: Request, res: Response) => {
    const { uuid = '' } = query;
    const reservation = await this.reservationUseCase.getReservationDetail(`${uuid}`);
    res.send({ reservation });
  }

  
  public registerReservation = async ({ body }: Request, res: Response) => {
    const reservation = await this.reservationUseCase.registerReservation(body);
    res.send({ reservation });
  }

  
  public getReservationsByUserId = async ({ query }: Request, res: Response) => {
    const { userId } = query;
    const reservations = await this.reservationUseCase.getReservationsByUserId(`${userId}`);
    res.send({ reservations });
  }
}
