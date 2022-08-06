import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 40rem;
  height: 4rem;

  gap: 1rem;
  /* padding: 0.5rem 1rem; */
  padding-left: 1rem;
  padding-right: 1rem;

  background: var(--white);
  border-radius: 15px;
  box-shadow: var(--shadow);
`;

export const Input = styled.input`
  border: none;
  background: var(--white);
  width: 100%;
  height: 100%;
  outline: none;
`;