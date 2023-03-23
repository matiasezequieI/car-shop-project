import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motorcycle: IMotorcycle) {
    super(
      motorcycle.model,
      motorcycle.year,
      motorcycle.color, 
      motorcycle.buyValue,
      motorcycle.id,
      motorcycle.status || false,
    );
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
  }
}
