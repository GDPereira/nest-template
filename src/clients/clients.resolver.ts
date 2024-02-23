import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClientsService } from './clients.service';
import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';

@Resolver('Client')
export class ClientsResolver {
  constructor(private readonly clientsService: ClientsService) {}

  @Mutation('createClient')
  create(@Args('createClientInput') createClientInput: CreateClientInput) {
    return this.clientsService.create(createClientInput);
  }

  @Query('clients')
  findAll() {
    return this.clientsService.findAll();
  }

  @Query('client')
  findOne(@Args('id') id: string) {
    return this.clientsService.findOne(id);
  }

  @Mutation('updateClient')
  update(
    @Args('updateClientInput')
    updateClientInput: UpdateClientInput,
  ) {
    return this.clientsService.update(updateClientInput);
  }

  @Mutation('removeClient')
  remove(@Args('id') id: string) {
    return this.clientsService.remove(id);
  }
}
