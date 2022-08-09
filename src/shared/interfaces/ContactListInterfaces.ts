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
  address: IAddress;
  tag?: string;
}

export interface IPrefillForm {
  telephone: string;
  telephone2: string;
  cep: string;
  street: string;
  number: string;
  neighborhood: string;
  complement: string;
  city: string;
  state: string;
  name: string;
  lastName?: string;
  surname?: string;
  email: string;
  address: IAddress;
  tag?: string;
}


export interface IEditContact {
  activeContact: IContact;
  newContact: IContact;
}