
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateClientInput {
    name: string;
    age: number;
    birthDate: string;
}

export class UpdateClientInput {
    id: string;
    name?: Nullable<string>;
    age?: Nullable<number>;
    birthDate?: Nullable<string>;
}

export class Client {
    id: string;
    name: string;
    age: number;
    birthDate: string;
}

export abstract class IQuery {
    abstract clients(): Nullable<Client>[] | Promise<Nullable<Client>[]>;

    abstract client(id: string): Nullable<Client> | Promise<Nullable<Client>>;
}

export abstract class IMutation {
    abstract createClient(createClientInput: CreateClientInput): Client | Promise<Client>;

    abstract updateClient(updateClientInput: UpdateClientInput): Client | Promise<Client>;

    abstract removeClient(id: string): Nullable<Client> | Promise<Nullable<Client>>;
}

type Nullable<T> = T | null;
