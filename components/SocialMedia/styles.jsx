import styled, { css } from "styled-components";

export const SocialMidia = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    .text {
      margin-left: 0.45rem;
      color: ${theme.purple03};
    }
  `};
`;
