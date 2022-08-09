import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  height: 8rem;
  padding: 3rem 5rem;
  background-color: var(--primary);

  @media (max-width: 425px) {
    padding: 0 1rem;

    img {
      width: 7rem;
    }
  }
  
  @media (max-width: 375px) {
    padding: 0 1rem;

    img {
      width: 6.5rem;
    }
  }
  
  @media (max-width: 320px) {
    padding: 0 1rem;

    img {
      width: 6rem;
    }
  }
`;
