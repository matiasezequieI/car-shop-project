import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';

describe('Deveria criar uma motocicleta', function () {
  const modelName = 'Honda Cb 600f Hornet';
  it('Deveria criar uma motocicle com SUCESSO', async function () {
    const motorcycleInput: IMotorcycle = {
      model: modelName,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    const motorcycleOutput: Motorcycle = new Motorcycle(
      {
        model: modelName,
        year: 2005,
        color: 'Yellow',
        buyValue: 30,
        id: '641df880003f896f23590056',
        status: true,
        category: 'Street',
        engineCapacity: 600,
      },
    );
    sinon.stub(Model, 'create').resolves(motorcycleOutput);

    const service = new MotorcycleService();
    const result = await service.create(motorcycleInput);

    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  it('Deveria lançar uma exceção quando o ID é inválido', async function () {
    const id = '123';

    sinon.stub(Model, 'findById').resolves({});

    try {
      const service = new MotorcycleService();
      await service.getById(id);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });

  it('Deveria retornar a lista com todas as motocicletas', async function () {
    const motorcycleInput = [
      {
        model: modelName,
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
    ];

    const motorcycleOutput = motorcycleInput.map((motorcycle) => new Motorcycle(
      motorcycle,
    ));

    sinon.stub(Model, 'find').resolves(motorcycleOutput);
   
    const service = new MotorcycleService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(motorcycleOutput);
  });
  
  afterEach(function () {
    sinon.restore();
  });
});