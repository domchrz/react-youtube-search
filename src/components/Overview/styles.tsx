import styled from 'styled-components';

export const StyledContainer = styled.div`
  grid-column: span 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 0.5rem;
  width: 20rem;
  padding: 0.5rem;
  background-color: #333;
  border-radius: 5px;
  animation: fadeInAndOut 2s infinite ease-in-out;

  @keyframes fadeInAndOut {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const StyledContentPlaceholder = styled.div`
  display: grid;
  place-items: center;
  aspect-ratio: 320/180;
  width: 100%;
  background-color: #444;
  border-radius: 2px;
`;

export const StyledTitlePlaceholder = styled.div`
  width: 100%;
  background-color: #555;
  height: 1.5rem;
  border-radius: 2px;
`;

export const StyledMetaPlaceholder = styled.div`
  width: 100%;
  background-color: #555;
  height: 2rem;
  border-radius: 2px;
`;

export const StyledPlayIcon = styled.span`
  font-family: ${({ theme }) => theme.fonts.icon};
  font-size: 5rem;
  color: #333;
`;
