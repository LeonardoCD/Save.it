import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const cep = yup
  .string()
  .min(8, "O CEP deve ter 8 dígitos")
  .max(8, "O CEP deve ter 8 dígitos");

const createContactFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  lastName: yup.string(),
  surName: yup.string(),
  telephone: yup.string().required("Telefone obrigatório"),
  telephone2: yup.string(),
  email: yup.string().required("E-mail obrigatório"),
  cep: cep,
  street: yup.string(),
  number: yup.string(),
  neighborhood: yup.string(),
  complement: yup.string(),
  locale: yup.string(),
  uf: yup.string(),
  tag: yup.string(),
});

export const createContactResolver = yupResolver(createContactFormSchema);
