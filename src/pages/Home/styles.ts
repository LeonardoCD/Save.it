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
  align-items: center;
  gap: 2rem;
  width: 100%;

  margin-top: -35px;

  button {
    box-shadow: var(--shadow);
  }
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;
  
  overflow: scroll;
  
  margin-top: 2rem;
  padding: 0 16rem;

  h2 {
    font-size: var(--big);
    font-weight: var(--fw-regular);
    color: var(--gray-800);
  }
`;