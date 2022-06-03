import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  background-color: ${({ theme }) => theme.colors.main};
  border: 1px solid ${({ theme }) => theme.colors.main};
`;

export const StyledIconButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.icon};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.font};
  background-color: ${({ theme }) => theme.colors.main};
  border: none;
  transition: color .3s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.action};
  }

`;
export const StyledInput = styled.input`
padding: .5rem 1rem;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.font};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid;
  border-color: transparent;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.action};
  }
`;
