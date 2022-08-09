import styled from "styled-components";

interface ButtonProps {
  color: string;
  background: string;
  width?: string;
  height?: string;
}

export const ButtonWrapper = styled.button<ButtonProps>`
  width: ${({ width }) => (width ? width : "fit-content")};
  height: ${({ height }) => (height ? height : "fit-content")};
  padding: 1rem 2rem;

  font-weight: var(--fw-medium);
  font-size: var(--default);

  border-radius: 15px;
  border: none;
  color: ${({ color }) => color};
  background: ${({ background }) => background};

  &:hover {
    filter: brightness(0.97);
  }

  @media (max-width: 768px) {
    font-size: var(--medium);
    padding: 1.1rem 3rem;
  }

  @media (max-width: 425px) {
    font-size: var(--medium);
    padding: 1.1rem 2rem;
  }

  @media (max-width: 375px) {
    font-size: var(--medium);
    padding: 1.1rem 1rem;
  }

  @media (max-width: 320px) {
    font-size: var(--medium);
    padding: 1.1rem 1rem;
  }
`;
