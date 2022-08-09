import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto;

  /* width: 50rem; */
  width: fit-content;
  max-width: 50rem;
  padding: 4.5rem 6rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  background-color: var(--white);
  border-radius: 15px;

  h1 {
    color: var(--primary);
    font-weight: var(--fw-semibold);
    font-size: var(--large);
  }

  legend {
    color: var(--primary);
    font-weight: var(--fw-semibold);
    font-size: var(--bigger);
  }

  @media (max-width: 425px) {
    /* width: 100%; */
    padding: 2rem;
  }

  @media (max-width: 375px) {
    width: 100%;
    padding: 1rem;
    
    h1 {
      font-size: var(--bigger);
    }

    legend {
      font-size: var(--bigger);
    }
  }

  @media (max-width: 320px) {
    padding: 1rem;

    h1 {
      font-size: var(--big);
    }

    legend {
      font-size: var(--big);
    }
  }
`;

export const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: inherit;
  gap: 1rem;

  @media (max-width: 425px) {
   flex-direction: column;
  }

  @media (max-width: 375px) {
   flex-direction: column;
  }
`;
