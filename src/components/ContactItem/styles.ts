import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */

  width: 100%;
  height: 4.4rem;
  padding: 0 2rem;
  padding-left: 1rem;

  background-color: var(--white);
  border-radius: 15px;

  overflow: hidden;

  @media (max-width: 375px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    padding: 1rem;
    gap: 1rem;
  }

  @media (max-width: 320px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    padding: 1rem;
    gap: 1rem;
  }
`;

export const ContactNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 375px) {
    width: fit-content;
  }

  @media (max-width: 320px) {
    width: fit-content;
  }
`;

export const ContactName = styled.p`
  font-size: var(--default);
  color: var(--gray-600);
`;
