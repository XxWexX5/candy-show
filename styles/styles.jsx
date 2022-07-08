import styled, { css } from "styled-components";

export const App = styled.main`
  ${({ theme }) => css`
    color: ${theme.colors.purple01};
  `};
`;
