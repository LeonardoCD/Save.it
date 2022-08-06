import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  height: 13rem;
  padding: 3rem 5rem;
  background-color: var(--primary);
`;

export const HeaderSearch = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;

  margin-top: -35px;

  button {
    box-shadow: var(--shadow);
  }
`;