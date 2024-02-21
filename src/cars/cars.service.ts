import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Car, CarDocument } from 'src/schemas/car.schema';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class CarsService {
  constructor(
    @InjectModel(Car.name) private readonly carModel: Model<CarDocument>,
  ) {}

  async create(createCarDto: CreateCarDto) {
    const car = new this.carModel(createCarDto);
    return car.save();
  }

  async findAll() {
    return this.carModel.find();
  }

  findOne(id: string) {
    const objId = new mongoose.Types.ObjectId(id);
    const teste = this.carModel.findById(objId);
    console.log('teste :>>', teste);

    return teste;
  }

  async update(id: string, updateCarDto: UpdateCarDto) {
    return this.carModel.findByIdAndUpdate(id, updateCarDto, { new: true });
  }

  async remove(id: string) {
    return this.carModel.findByIdAndDelete(id);
  }
}
