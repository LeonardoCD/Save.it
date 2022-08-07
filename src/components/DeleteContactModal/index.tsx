import Modal from "react-modal";
import { OutlineButton, Row } from "..";
import { ContentModal, ModalTitle } from "./styles";

interface DeleteContactModalProps {
  contactName: string;
  isOpen: boolean;
  onRequestClose: () => void;
}

export function DeleteContactModal({
  contactName,
  isOpen,
  onRequestClose,
}: DeleteContactModalProps) {
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
          />
        </Row>
      </ContentModal>
    </Modal>
  );
}
