import styled from "styled-components";

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;

  border: none;
  border-radius: 15px;

  color: var(--white);
  font-size: var(--default);
  font-weight: var(--fw-semibold);
  background-color: var(--blue-900);

  transition: all 0.2s;

  &:hover {
    filter: brightness(0.97);
  }

  @media (max-width: 425px) {
    img {
      width: 2rem;
    }
  }

  @media (max-width: 375px) {
    font-size: var(--medium);
    padding: 0.8rem 1rem;
    img {
      width: 2rem;
    }
  }

  @media (max-width: 320px) {
    font-size: var(--medium);
    padding: 0.8rem 1rem;
    img {
      width: 1.5rem;
    }
  }
`;
