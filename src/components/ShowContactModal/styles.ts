import styled from "styled-components";


export const CloseButton = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  transition: filter 0.2s;
  &:hover {
      filter: brightness(0.8);
  }
`;

export const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
`;

export const TitleModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h1 {
    color: var(--gray-900);
    font-weight: var(--fw-medium);
    font-size: var(--default);
  }
`;

export const SectionData = styled.section`
  h2 {
    color: var(--gray-900);
    font-size: var(--between);
  }
`;

export const WrapperData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-top: 20px;
`;

export const DataTitle = styled.p`
  color: var(--gray-800);
  font-size: var(--medium);
  font-weight: var(-fw-regular);
`;

export const RowData = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Data = styled.div`
  display: flex;
  align-items: center;

  width: fit-content;

  padding: 0.7rem 1.3rem;
  border-radius: 15px;
  border: 1px solid var(--gray-600);
  background: var(--white);

  p {
    color: var(--gray-500);
    font-weight: var(--fw-light);
    font-size: var(--medium);
  }
`;