import styled from "styled-components";

interface OutlineButtonProps {
  color: string;
  padding?: string;
}

export const OutlineButtonWrapper = styled.button<OutlineButtonProps>`
  display: flex;
  align-items: center;

  padding: ${({ padding }) => padding ? padding : '0.4rem 1.5rem'};
  border: 1px solid ${({ color }) => color};
  color: ${({ color }) => color};
  border-radius: 15px;
  font-size: var(--medium);

  &:hover {
    filter: brightness(0.6);
  }
`;
