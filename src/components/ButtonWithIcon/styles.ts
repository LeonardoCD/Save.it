import styled from "styled-components";

export const ButtonWrapper = styled.button`
  display: flex;
  gap: 0.5rem;
  padding: 1rem 2rem;

  border: none;
  border-radius: 15px;

  color: var(--white);
  font-weight: var(--fw-semibold);
  font-size: var(--default);
  background-color: var(--blue-900);

  transition: all 0.2s;
`;