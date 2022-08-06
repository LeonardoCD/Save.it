export interface IAddress {
  cep: string;
  street: string;
  number: string;
  neighborhood: string;
  complement: string;
  city: string;
  state: string;
}

export interface IContact {
  name: string;
  lastName?: string;
  surname?: string;
  telephone: string[];
  email: string;
  address: IAddress[];
  tag: string;
}