import styled from 'styled-components';

export const StyledContainer = styled.li`
  grid-column: span 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem;
  background-color: #333;
  border-radius: 5px;
`;

export const StyledContent = styled.div`
  position: relative;
  display: flex;
  flex-basis: 4rem;
`;

export const StyledImg = styled.img`
  width: 100%;
  aspect-ratio: 320/180;
  object-fit: cover;
  border: 1px solid;
  border-color: transparent;
  transition: border-color 0.3s;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.action};
  }

  &:hover + span:first-of-type {
    opacity: 1;
  }
`;

export const StyledPlayIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  font-family: ${({ theme }) => theme.fonts.icon};
  color: ${({ theme }) => theme.colors.action};
  font-size: 4rem;
  transition: opacity 0.3s;
  pointer-events: none;
`;

export const StyledTitle = styled.h3`
  width: 100%;
  color: white;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
`;

export const StyledMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.25rem 0.5rem;
  color: #eeeeee;
  & p {
    font-size: 0.8rem;
  }
`;
