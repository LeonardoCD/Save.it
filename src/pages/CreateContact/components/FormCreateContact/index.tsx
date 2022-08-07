import { Button, Form, Input, Row } from "../../../../components";
import { useForm } from "react-hook-form";
import { IAddress, IContact, ICreateForm } from "../../../../shared/interfaces";
import { createContactResolver } from "../../../../validators/formValidators";
import { useDispatch } from "react-redux";
import { addContact } from "../../../../redux/slices/contactList";
import { useNavigate } from "react-router-dom";

export function FormCreateContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateForm>({
    resolver: createContactResolver,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateContact = (data: ICreateForm) => {
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
      state: data.uf,
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
    navigate("/");
  };

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
        />
        <Input
          {...register("lastName")}
          type="text"
          label="Sobrenome"
          id="lastName"
          error={errors.lastName}
        />
        <Input
          {...register("surName")}
          type="text"
          label="Apelido"
          id="surName"
          width="20rem"
          error={errors.surName}
        />
      </fieldset>

      <fieldset>
        <legend>Contato</legend>
        <Row style={{ justifyContent: "space-between" }}>
          <Input
            {...register("telephone")}
            type="text"
            label="Telefone"
            id="telephone"
            width="18rem"
            error={errors.telephone}
          />
          <Input
            {...register("telephone2")}
            type="text"
            label="Telefone(2)"
            id="telephone2"
            width="18rem"
            error={errors.telephone2}
          />
        </Row>
        <Input
          type="email"
          label="E-mail"
          id="email"
          {...register("email")}
          error={errors.email}
        />
      </fieldset>

      <fieldset>
        <legend>Endereço</legend>
        <Row
          style={{ justifyContent: "space-between", alignItems: "flex-end" }}
        >
          <Input
            {...register("cep")}
            type="text"
            label="Cep"
            id="cep"
            width="26rem"
            error={errors.cep}
          />
          <Button
            text="Buscar Cep"
            color="var(--white)"
            background="var(--blue-700)"
          />
        </Row>
        <Row style={{ justifyContent: "space-between" }}>
          <Input
            {...register("street")}
            type="text"
            label="Logradouro"
            id="street"
            width="18rem"
            error={errors.street}
          />
          <Input
            {...register("number")}
            type="text"
            label="Número"
            id="number"
            width="18rem"
            error={errors.number}
          />
        </Row>
        <Row style={{ justifyContent: "space-between" }}>
          <Input
            {...register("neighborhood")}
            type="text"
            label="Bairro"
            id="neighborhood"
            width="18rem"
            error={errors.neighborhood}
          />
          <Input
            {...register("complement")}
            type="text"
            label="Complemento"
            id="complement"
            width="18rem"
            error={errors.complement}
          />
        </Row>
        <Row style={{ justifyContent: "space-between" }}>
          <Input
            {...register("locale")}
            type="text"
            label="Localidade"
            id="locale"
            width="18rem"
            error={errors.locale}
          />
          <Input
            {...register("uf")}
            type="text"
            label="UF"
            id="uf"
            width="18rem"
            error={errors.uf}
          />
        </Row>
      </fieldset>

      <fieldset>
        <legend>Agrupamento</legend>
        <Input {...register("tag")} type="text" label="Marcador" id="tag" />
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
