import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const createContactFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  lastName: yup.string(),
  surName: yup.string(),
  telephone: yup.string().required('Telefone obrigatório'),
  telephone2: yup.string(),
  email: yup.string().required('E-mail obrigatório'),
  cep: yup.string(),
  street: yup.string(),
  number: yup.string(),
  locale: yup.string(),
  uf: yup.string(),
  tag: yup.string(),
});


export const createContactResolver = yupResolver(createContactFormSchema);

