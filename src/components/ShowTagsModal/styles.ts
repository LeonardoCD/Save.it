import styled from "styled-components";


export const CloseButton = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  transition: filter 0.2s;
  &:hover {
      filter: brightness(0.8);
  }
`;

export const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

  min-width: 30rem;
  max-width: 35rem;

  h1 {
    font-size: var(--big);
    color: var(--gray-900);
  }
`;


export const Choices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;