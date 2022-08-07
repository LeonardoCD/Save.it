import { IContact } from "../interfaces";

export const contactList: IContact[] = [
  {
    name: "João",
    lastName: "Silva",
    surname: "Santos",
    telephone: ["+55 (11) 99999-9999"],
    email: "leonardofelipe931@gmal.com",
    address: {
      cep: "01001-000",
      street: "Rua dos Bobos",
      number: "0",
      neighborhood: "Bairro dos Bobos",
      complement: "",
      city: "São Paulo",
      state: "SP",
    },
    tag: "",
  },
  {
    name: "Leonardo",
    lastName: "Felipe",
    surname: "Leo",
    telephone: ["(95) 99171-8840"],
    email: "leonardofelipe931@gmal.com",
    address: {
      cep: "69314-338",
      street: "Rua dos Bobos",
      number: "0",
      neighborhood: "Bairro dos Bobos",
      complement: "",
      city: "Boa Vista",
      state: "RR",
    },
    tag: "",
  },
];