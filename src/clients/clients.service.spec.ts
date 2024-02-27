import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateClientInput } from 'src/graphql';
import { Client, ClientDocument } from 'src/schemas/client.schema';
import { ClientsService } from './clients.service';

describe('ClientsService', () => {
  const mockClientModel = {
    create: jest.fn(),
    find: jest.fn(),
    findById: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn(),
  };
  let service: ClientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientsService,
        {
          provide: getModelToken(Client.name),
          useValue: mockClientModel,
        },
      ],
    }).compile();
    service = module.get<ClientsService>(ClientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create client', async () => {
    const createClientInput = {
      age: 10,
      birthDate: '10/10/2010',
      name: 'Client 1',
    } as CreateClientInput;

    const client = {
      id: Date.now().toString(),
      name: 'Client 1',
      age: 10,
      birthDate: '10/10/2010',
    } as ClientDocument;

    jest.spyOn(mockClientModel, 'create').mockReturnValue(client);

    const newClient = await service.create(createClientInput);

    expect(mockClientModel.create).toHaveBeenCalled();
    expect(mockClientModel.create).toHaveBeenLastCalledWith(createClientInput);

    expect(newClient).toEqual(client);
  });

  it('should get clients', async () => {
    const client = {
      id: Date.now().toString(),
      name: 'Client 1',
      age: 10,
      birthDate: '10/10/2010',
    } as ClientDocument;

    const clients = [client];

    jest.spyOn(mockClientModel, 'find').mockReturnValue(clients);

    const results = await service.findAll();

    expect(mockClientModel.find).toHaveBeenCalled();
    expect(results).toEqual(clients);
  });

  it('should remove client', async () => {
    const id = Date.now().toString();
    const client = {
      id,
      name: 'Client 1',
      age: 10,
      birthDate: '10/10/2010',
    } as ClientDocument;

    jest.spyOn(mockClientModel, 'findByIdAndDelete').mockReturnValue(client);

    const result = await service.remove(id);

    expect(mockClientModel.findByIdAndDelete).toHaveBeenCalled();
    expect(mockClientModel.findByIdAndDelete).toHaveBeenCalledWith(id);
    expect(result).toEqual(client);
  });
});
