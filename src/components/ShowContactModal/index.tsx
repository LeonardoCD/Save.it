import { Avatar } from "@chakra-ui/react";
import Modal from "react-modal";
import {
  CloseButton,
  ContentModal,
  Data,
  DataTitle,
  RowData,
  SectionData,
  TitleModal,
  WrapperData,
} from "./styles";

import CloseImg from "../../assets/close.svg";
import { getActiveContact } from "../../redux/slices/activeContact";
import { useSelector } from "react-redux";
import { fullName } from "../../shared/utils";

interface ShowContactModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ShowContactModal({
  isOpen,
  onRequestClose,
}: ShowContactModalProps) {
  const contact = useSelector(getActiveContact);
  const name = fullName(contact.name, contact.lastName);

  const { address } = contact;

  const formattedAddress = `${address?.street}, ${address?.number}, 
    ${address?.neighborhood}, ${address?.cep}`;

  const locale = `${address?.city}, ${address?.state}`;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <CloseButton
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={CloseImg} alt="Fechar modal" />
      </CloseButton>
      <ContentModal>
        <TitleModal>
          <Avatar name={name} />
          <h1>{name}</h1>
        </TitleModal>

        <SectionData>
          <h2>Dados do contado</h2>
          <WrapperData>
            <DataTitle>Telefone(s)</DataTitle>
            <RowData>
              {contact.telephone?.map((telephone: string) => {
                return (
                  <Data>
                    <p>{telephone}</p>
                  </Data>
                );
              })}
            </RowData>
          </WrapperData>

          <WrapperData>
            <DataTitle>E-mail</DataTitle>
            <RowData>
              <Data>
                <p>{contact.email}</p>
              </Data>
            </RowData>
          </WrapperData>

          <WrapperData>
            <DataTitle>Endereço</DataTitle>
            <RowData>
              <Data>
                <p>{formattedAddress}</p>
              </Data>
              <Data>
                <p>{locale}</p>
              </Data>
            </RowData>
          </WrapperData>

          {contact.tag && (
            <WrapperData>
              <DataTitle>Marcador</DataTitle>
              <RowData>
                <Data>
                  <p>{contact.tag}</p>
                </Data>
              </RowData>
            </WrapperData>
          )}
        </SectionData>
      </ContentModal>
    </Modal>
  );
}
