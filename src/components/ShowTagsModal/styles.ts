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

  @media (max-width: 320px) {
    width: 1.3rem;
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

  @media (max-width: 320px) {
    h1 {
      font-size: var(--medium);
    }
  }
`;


export const Choices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 425px) {
    width: 80%;
  }

  @media (max-width: 375px) {
    width: 70%;
  }

  @media (max-width: 320px) {
    width: 50%;
  }

  
`;