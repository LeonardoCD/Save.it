import styled from "styled-components";

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-top: 1.4rem;
  width: 100%;
`;

export const SelectContainer = styled.select`
  height: 3.5rem;
  width: 100%;
  padding: 1rem;
  border-radius: 15px;
  background-color: var(--gray-400);
  outline: none;
`;

export const Label = styled.label`
  font-size: var(--medium);
  color: var(--gray-700);
  font-weight: var(--fw-regular);
`;

export const Option = styled.option`
  padding: 1rem;
`;
