import IVehicle from './IVehicle';

interface Motorcycle extends IVehicle {
  category: string;
  engineCapacity: number;
}

export default Motorcycle;