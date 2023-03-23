import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    super(
      car.model,
      car.year,
      car.color, 
      car.buyValue,
      car.id,
      car.status || false,
    );
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }
}
