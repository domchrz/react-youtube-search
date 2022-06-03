import styled, { createGlobalStyle } from 'styled-components';

const StyledGlobal = createGlobalStyle`
& *, & *::after, & *::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

& html {
  scroll-behavior: smooth;
}

& body {
  position: relative;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  color: ${({ theme }) => theme.colors.font};
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
}

& #root{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

& ul {
  list-style: none;
}
`;

export const StyledMain = styled.main`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 100rem;
  margin-top: 1rem;
  padding: 1rem;
`;

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  z-index: 100;
`;

export const StyledHeadline = styled.h1`
  font-weight: normal;
  font-family: ${({ theme }) => theme.fonts.serif};
  color: ${({ theme }) => theme.colors.warning};
  font-size: 2.5rem;
`;

export default StyledGlobal;
