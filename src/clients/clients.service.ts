import { Injectable } from '@nestjs/common';
import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';
import { InjectModel } from '@nestjs/mongoose';
import { Client, ClientDocument } from 'src/schemas/client.schema';
import { Model } from 'mongoose';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client.name)
    private readonly clientModel: Model<ClientDocument>,
  ) {}

  create(createClientInput: CreateClientInput) {
    return this.clientModel.create(createClientInput);
  }

  findAll() {
    return this.clientModel.find();
  }

  findOne(id: string) {
    return this.clientModel.findById(id);
  }

  update({ id, ...updateClientInput }: UpdateClientInput) {
    return this.clientModel.findByIdAndUpdate(id, updateClientInput, {
      new: true,
    });
  }

  remove(id: string) {
    return this.clientModel.findByIdAndDelete(id);
  }
}
