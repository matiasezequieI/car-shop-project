import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';

describe('Deveria criar um carro', function () {
  it('Deveria criar um carro com SUCESSO', async function () {
    const carInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    const carOutPut: Car = new Car(
      {
        model: 'Marea',
        year: 2002,
        color: 'Black',
        buyValue: 15.99,
        id: '641df349003f896f23590054',
        status: true,
        doorsQty: 4,
        seatsQty: 5,
      },
    );
    sinon.stub(Model, 'create').resolves(carOutPut);

    const service = new CarService();
    const result = await service.create(carInput);

    expect(result).to.be.deep.equal(carOutPut);
  });

  it('Deveria lançar uma exceção quando o ID é inválido', async function () {
    const id = '123';

    sinon.stub(Model, 'findById').resolves({});

    try {
      const service = new CarService();
      await service.getById(id);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });

  it('Deveria retornar a lista com todos os carros', async function () {
    const carInput = [
      {
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      },
    ];

    const carOutput = carInput.map((car) => new Car(
      car,
    ));

    sinon.stub(Model, 'find').resolves(carOutput);
   
    const service = new CarService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(carOutput);
  });
  
  afterEach(function () {
    sinon.restore();
  });
});