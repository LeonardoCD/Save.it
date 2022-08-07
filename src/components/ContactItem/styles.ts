import styled from "styled-components";


export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 4.4rem;
  padding: 0 2rem;
  padding-left: 1rem;

  background-color: var(--white);
  border-radius: 15px;

  overflow: hidden; 

  &:hover {
    cursor: pointer;
  }
`;

export const ContactName = styled.p`
  font-size: var(--default);
  color: var(--gray-600);
`;