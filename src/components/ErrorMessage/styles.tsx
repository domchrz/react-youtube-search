import styled from 'styled-components';

interface Props {
  bottom: number;
}

export const StyledContainer = styled.div<Props>`
  text-align: center;
  position: absolute;
  width: 100%;
  top: calc(${({ bottom }) => bottom}px - 3rem);
  padding: 1rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.warning};
`;
