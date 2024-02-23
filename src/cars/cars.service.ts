import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car, CarDocument } from 'src/schemas/car.schema';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  constructor(
    @InjectModel(Car.name) private readonly carModel: Model<CarDocument>,
  ) {}

  create(createCarDto: CreateCarDto) {
    const car = new this.carModel(createCarDto);
    return car.save();
  }

  findAll() {
    return this.carModel.find();
  }

  findOne(id: string) {
    return this.carModel.findById(id);
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    return this.carModel.findByIdAndUpdate(id, updateCarDto, { new: true });
  }

  remove(id: string) {
    return this.carModel.findByIdAndDelete(id);
  }
}
