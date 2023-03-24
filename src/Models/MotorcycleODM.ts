import { Model, Schema, model, models } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcycleODM {
  private schema: Schema;
  private model: Model<IMotorcycle>;

  constructor() {
    this.schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    }, { collection: 'motorcycles' });
  
    this.model = models.Motorcycle || model('Motorcycle', this.schema);
  }

  public async create(car: IMotorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...car });
  }

  public async getAll(): Promise<IMotorcycle[]> {
    return this.model.find();
  }

  public async getById(id: string): Promise<IMotorcycle | null> {
    return this.model.findById(id);
  }
}

export default MotorcycleODM;