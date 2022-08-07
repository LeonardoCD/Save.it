import styled from "styled-components";

interface ButtonProps {
  color: string;
  background: string;
  width?: string;
}

export const ButtonWrapper = styled.button<ButtonProps>`
  width: ${({ width }) => (width ? width : "fit-content")};
  padding: 1rem 2rem;

  font-weight: var(--fw-medium);
  font-size: var(--default);

  border-radius: 15px;
  border: none;
  color: ${({ color }) => color};
  background: ${({ background }) => background};
`;
