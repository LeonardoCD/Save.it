import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { Button } from "..";
import CloseImg from "../../assets/close.svg";
import { setActiveTag } from "../../redux/slices";
import { tagsList } from "../../shared/utils";
import { Choices, CloseButton, ContentModal } from "./styles";

interface ShowContactModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ShowTagsModal({
  isOpen,
  onRequestClose,
}: ShowContactModalProps) {
  const dispatch = useDispatch();

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
        <h1>Escolha um dos marcadores:</h1>
        <Choices>
          {tagsList.map((tag) => (
            <Button
              key={tag}
              background="var(--gray-400)"
              text={tag}
              color="var(--gray-600)"
              width="100%"
              onClick={() => {
                dispatch(setActiveTag(tag));
                onRequestClose();
              }}
            />
          ))}
          <Button
            background="var(--input-error)"
            text="Limpar Marcadores"
            color="var(--red-900)"
            width="100%"
            onClick={() => {
              dispatch(setActiveTag(""));
              onRequestClose();
            }}
          />
        </Choices>
      </ContentModal>
    </Modal>
  );
}
