import styled, { css } from "styled-components";

export const App = styled.main`
  ${({ theme }) => css`
    color: ${theme.colors.purple01};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    height: 100%;
  `};
`;
