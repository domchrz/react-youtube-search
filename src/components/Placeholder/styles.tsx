import styled from 'styled-components';

export const StyledUl = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
  gap: 1rem;

  @media (min-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 70rem) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 90rem) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
