import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto;

  /* width: fit-content; */
  width: 50rem;
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

  /* fieldset {
    display: flex;
    flex-direction: column;
    gap: 10rem;
  } */

  legend {
    color: var(--primary);
    font-weight: var(--fw-semibold);
    font-size: var(--bigger);
  }

`;