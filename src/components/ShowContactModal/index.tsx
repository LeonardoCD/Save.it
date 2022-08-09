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
import { useSelector } from "react-redux";
import { fullName } from "../../shared/utils";
import { getActiveContact } from "../../redux/slices";

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
  const { address, surname } = contact;

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
          <h1>
            {name}
            {surname && ` - ${surname}`}
          </h1>
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
              {address?.street !== "" && (
                <Data>
                  <p>{address?.street}</p>
                </Data>
              )}
              {address?.number !== "" && (
                <Data>
                  <p>{address?.number}</p>
                </Data>
              )}
              {address?.neighborhood !== "" && (
                <Data>
                  <p>{address?.neighborhood}</p>
                </Data>
              )}
              {address?.cep !== "" && (
                <Data>
                  <p>{address?.cep}</p>
                </Data>
              )}
              {address?.city !== "" && (
                <Data>
                  <p>{address?.city}</p>
                </Data>
              )}
              {address?.state !== "" && (
                <Data>
                  <p>{address?.state}</p>
                </Data>
              )}
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
