import styled from "styled-components";

interface ButtonProps {
  color: string;
  background: string;
}

export const ButtonWrapper = styled.button<ButtonProps>`
  width: fit-content;
  padding: 1rem 2rem;

  font-weight: var(--semibold);
  font-size: var(--default);

  border-radius: 15px;
  border: none;
  color: ${({ color }) => color};
  background: ${({ background }) => background};
`;
