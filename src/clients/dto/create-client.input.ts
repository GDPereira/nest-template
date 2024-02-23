import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateClientInput {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsString()
  @IsNotEmpty()
  birthDate: string;
}
