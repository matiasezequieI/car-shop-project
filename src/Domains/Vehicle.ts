export default class Vehicle {
  protected model: string;
  protected year: number;
  protected color: string;
  protected buyValue: number;
  protected id: string | undefined;
  protected status: boolean | false;

  constructor(
    model: string, 
    year: number, 
    color: string, 
    buyValue: number, 
    id: string | undefined, 
    status: boolean | false,
  ) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.buyValue = buyValue;
    this.id = id;
    this.status = status;
  }
}