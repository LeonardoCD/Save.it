import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;

  height: 13rem;
  padding: 3rem 5rem;
  background-color: var(--primary);

  @media (max-width: 425px) {
    height: 10rem;
    padding: 0.7rem 3.1rem;

    img {
      width: 7rem;
    }
  }

  @media (max-width: 375px) {
    height: 10rem;
    padding: 0.7rem 1.5rem;

    img {
      width: 6rem;
    }
  }

  @media (max-width: 320px) {
    height: 10rem;
    padding: 0.7rem 0.4rem;

    img {
      width: 6rem;
    }
  }
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

  @media (max-width: 425px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;

  overflow: scroll;

  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 0 15.4rem;

  h2 {
    font-size: var(--big);
    font-weight: var(--fw-regular);
    color: var(--gray-800);
  }

  @media (min-width: 1440px) {
    padding: 0 18rem;
  }

  @media (max-width: 1024px) {
    padding: 0 7rem;
  }

  @media (max-width: 768px) {
    padding: 0 5rem;
  }

  @media (max-width: 425px) {
    padding: 0.7rem 1rem;
  }

  @media (max-width: 320px) {
    padding: 0;
    margin-top: 1rem;

    h2 {
      font-size: var(--default);
    }
  }
`;


export const NoContact = styled.p`
  color: var(--gray-900);
  font-weight: var(--fw-semibold);
  font-size: var(--big);
  margin-top: 2rem;
  color: var(--primary);
`;