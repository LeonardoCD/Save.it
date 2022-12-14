import { toast } from "react-toastify";
import { Button, Form, Input, Row, Select } from "../../../../components";
import { InputRow } from "../../../../components/Form/styles";
import { addContact, getContactList } from "../../../../redux/slices";
import { useDispatch, useNavigate, useSelector, useForm } from "../../../../shared/hooks";
import { IAddress, IContact, ICreateForm } from "../../../../shared/interfaces";
import { cep } from "../../../../shared/services/cep";
import { alreadyExists, fullName, normalizeCep, normalizeTelephone } from "../../../../shared/utils";
import { onLoadingError, onLoadingSuccess } from "../../../../validators/feedBackValidators";
import { createContactResolver } from "../../../../validators/formValidators";


export function FormCreateContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<ICreateForm>({
    resolver: createContactResolver,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contactList = useSelector(getContactList);
  const { sendCep } = cep();

  const handleCreateContact = (data: ICreateForm) => {
    const currentName = fullName(data.name, data.lastName);
    const exists = alreadyExists(contactList, currentName);
    if (exists) {
      toast.error(`${currentName} já existe na lista de contatos!`);
      return;
    }

    const telephones: string[] = [];
    telephones.push(data.telephone);
    if (data.telephone2) {
      telephones.push(data.telephone2);
    }

    const add: IAddress = {
      cep: data.cep,
      street: data.street,
      number: data.number,
      neighborhood: data.neighborhood,
      city: data.locale,
      complement: data.complement,
      state: data.uf.toLocaleUpperCase(),
    };

    const contact: IContact = {
      name: data.name,
      lastName: data.lastName,
      surname: data.surName,
      telephone: telephones,
      email: data.email,
      address: add,
      tag: data.tag,
    };

    dispatch(addContact(contact));
    toast.success("Contato criado com sucesso!");
    navigate("/");
  };

  async function getCep(cep: string) {
    if (cep === "") {
      toast.warning("Informe um cep!");
      return;
    }

    cep = cep.replace("-", "").replace(".", "");

    const loading = toast.loading("Buscando cep...");
    try {
      const resGetCep = await sendCep(cep);
      if (resGetCep.data.erro) {
        onLoadingError(`Erro ao buscar informações do cep informado!`, loading);
        return;
      }
      setValue("street", resGetCep.data.logradouro);
      setValue("neighborhood", resGetCep.data.bairro);
      setValue("complement", resGetCep.data.complemento);
      setValue("locale", resGetCep.data.localidade);
      setValue("uf", resGetCep.data.uf);

      onLoadingSuccess(`Cep encontrado com sucesso!`, loading);
    } catch (error: any) {
      if (error.status === 400) {
        onLoadingError(`O cep informado é inválido!`, loading);
      }
      onLoadingError(`Erro ao buscar o cep informado!`, loading);
    }
  }

  return (
    <Form onSubmit={handleSubmit(handleCreateContact)}>
      <h1>Criar Novo Contato</h1>
      <fieldset>
        <legend>Dados</legend>
        <Input
          {...register("name")}
          type="text"
          label="Nome"
          id="name"
          error={errors.name}
          placeholder="João"
        />
        <Input
          {...register("lastName")}
          type="text"
          label="Sobrenome"
          id="lastName"
          error={errors.lastName}
          placeholder="da Silva"
        />
        <Input
          {...register("surName")}
          type="text"
          label="Apelido"
          id="surName"
          width="20rem"
          error={errors.surName}
          placeholder="Joãozinho"
        />
      </fieldset>

      <fieldset>
        <legend>Contato</legend>
        <InputRow>
          <Input
            {...register("telephone")}
            type="tel"
            placeholder="(00) 00000-0000"
            label="Telefone"
            id="telephone"
            error={errors.telephone}
            onChange={(event) => {
              const { value } = event.target;
              event.target.value = normalizeTelephone(value);
            }}
          />
          <Input
            {...register("telephone2")}
            type="tel"
            placeholder="(00) 00000-0000"
            label="Telefone(2)"
            id="telephone2"
            error={errors.telephone2}
            onChange={(event) => {
              const { value } = event.target;
              event.target.value = normalizeTelephone(value);
            }}
          />
        </InputRow>
        <Input
          type="email"
          label="E-mail"
          id="email"
          {...register("email")}
          error={errors.email}
          placeholder="joao@gmail.com"
        />
      </fieldset>

      <fieldset>
        <legend>Endereço</legend>
        <Row
          style={{
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Input
            {...register("cep")}
            type="text"
            label="Cep"
            id="cep"
            error={errors.cep}
            placeholder="99.999-999"
            onChange={(event) => {
              const { value } = event.target;
              event.target.value = normalizeCep(value);
            }}
            style={{ maxWidth: "60%" }}
          />
          <Button
            text="Buscar Cep"
            color="var(--white)"
            background="var(--blue-700)"
            type="button"
            onClick={() => {
              const cep = getValues("cep");
              getCep(cep);
            }}
          />
        </Row>
        <InputRow style={{ justifyContent: "space-between" }}>
          <Input
            {...register("street")}
            type="text"
            label="Logradouro"
            id="street"
            error={errors.street}
            placeholder="Rua dos Bobos"
          />
          <Input
            {...register("number")}
            type="text"
            label="Número"
            id="number"
            error={errors.number}
            placeholder="687"
          />
        </InputRow>
        <InputRow>
          <Input
            {...register("neighborhood")}
            type="text"
            label="Bairro"
            id="neighborhood"
            error={errors.neighborhood}
            placeholder="Bairro dos Bobos"
          />
          <Input
            {...register("complement")}
            type="text"
            label="Complemento"
            id="complement"
            error={errors.complement}
            placeholder="Ao lado do mercadinho"
          />
        </InputRow>
        <InputRow>
          <Input
            {...register("locale")}
            type="text"
            label="Localidade"
            id="locale"
            error={errors.locale}
            placeholder="Boa Vista"
          />
          <Input
            {...register("uf")}
            type="text"
            label="UF"
            id="uf"
            error={errors.uf}
            placeholder="RR"
          />
        </InputRow>
      </fieldset>

      <fieldset>
        <legend>Agrupamento</legend>
        <Select label="Marcador" id="tag" {...register("tag")} />
      </fieldset>

      <Button
        text="CADASTRAR CONTATO"
        color="var(--white)"
        background="var(--blue-700)"
        width="100%"
        type="submit"
      />
    </Form>
  );
}
