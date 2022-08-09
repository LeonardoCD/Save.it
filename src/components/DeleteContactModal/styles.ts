import styled from "styled-components";

export const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
`;


export const ModalTitle = styled.p`
  font-weight: var(--fw-regular);
  color: var(--gray-900);
  font-size: var(--big);

  strong {
    color: var(--red-900);
    font-weight: var(--fw-semibold);
  }

  @media (max-width: 320px) {
    font-size: 1.1rem;
  }
`;