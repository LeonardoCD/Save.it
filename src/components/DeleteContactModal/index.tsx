import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { OutlineButton, Row } from "..";
import { getActiveContact, removeContact } from "../../redux/slices";
import { fullName } from "../../shared/utils";
import { ContentModal, ModalTitle } from "./styles";

interface DeleteContactModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function DeleteContactModal({
  isOpen,
  onRequestClose,
}: DeleteContactModalProps) {
  const dispatch = useDispatch();
  const contact = useSelector(getActiveContact);
  const contactName = fullName(contact.name, contact.lastName);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ContentModal>
        <ModalTitle>
          Tem certeza que deseja excluir <strong>{contactName}</strong> da lista
          de contatos?
        </ModalTitle>
        <Row style={{ gap: "2rem" }}>
          <OutlineButton
            text="Cancelar"
            color="var(--red-900)"
            padding="0.75rem 1.5rem"
            onClick={onRequestClose}
          />
          <OutlineButton
            text="Confirmar"
            color="var(--gray-600)"
            padding="0.75rem 1.5rem"
            onClick={() => {
              dispatch(removeContact(contact));
              onRequestClose();
            }}
          />
        </Row>
      </ContentModal>
    </Modal>
  );
}
