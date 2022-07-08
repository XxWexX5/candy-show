import styled, { css } from "styled-components";

export const App = styled.main`
  ${({ theme, color }) => css`
    color: ${theme.colors.purple01};
  `};
`;
