import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const InputWrapper = styled.div`
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

  @media (max-width: 768px) {
    width: 27rem;
  }
  
  @media (max-width: 425px) {
    width: 24rem;
  }

  @media (max-width: 320px) {
    width: 20rem;
  }
`;

export const Input = styled.input`
  border: none;
  background: var(--white);
  width: 100%;
  height: 100%;
  outline: none;
`;

export const DataResult = styled.div`
  background-color: var(--white);
  border-radius: 15px;
  margin-top: 0.2rem;

  max-height: 13rem;
  width: 100%;
  box-shadow: var(--shadow);

  overflow: hidden;
  overflow-y: auto;

  position: absolute;

  top: 70px;
  z-index: 1;
`;

export const DataItem = styled.div`
  display: flex;
  align-items: center;

  /* margin-top: 0.5rem; */
  padding: 0.5rem 1rem;

  &:hover {
    cursor: pointer;
    background-color: var(--gray-300);
  }
`;