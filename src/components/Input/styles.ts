import styled from "styled-components";

interface InputProps {
  error?: boolean;
}

interface InputWrapperProps {
  width?: string;
}

export const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-top: 1.4rem;
  width: ${({ width }) => width ? width : '100%'};
`;

export const InputContainer = styled.input<InputProps>`
  height: 3.5rem;
  width: 100%;
  padding: 1rem;

  color: var(--gray-800);
  background-color: var(--gray-400);
  border-radius: 15px;
  outline: none;
`;

export const Label = styled.label`
  font-size: var(--medium);
  color: var(--gray-700);
  font-weight: var(--fw-regular);
`;