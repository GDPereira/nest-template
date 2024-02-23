import { IsNotEmpty, IsString } from 'class-validator';
import { CreateClientInput } from './create-client.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateClientInput extends PartialType(CreateClientInput) {
  @IsString()
  @IsNotEmpty()
  id: string;
}
