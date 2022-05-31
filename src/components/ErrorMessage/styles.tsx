import styled from 'styled-components';

export const StyledContainer = styled.div`
text-align: center;
position: absolute;
width: 100%;
bottom: 0;
padding: 1rem;
background-color: ${({theme}) => theme.colors.warning};
`