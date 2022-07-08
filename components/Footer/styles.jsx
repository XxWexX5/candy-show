import styled, { css } from "styled-components";

export const WrapperFooter = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.green01};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    .container {
      display: flex;
      align-items: center;
    }

    .wrapper-social-media {
      margin-left: 1.65rem;

      a + a {
        margin-top: 0.4rem;
      }
    }
  `};
`;
