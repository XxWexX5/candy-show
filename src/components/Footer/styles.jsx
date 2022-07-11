import styled, { css } from "styled-components";

export const WrapperFooter = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.green01};
    padding: 0.35rem 0 1.65rem;
    position: relative;

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .wrapper-social-media {
      margin-left: 1.65rem;

      a + a {
        margin-top: 0.4rem;
      }
    }

    .container-reserved-rights {
      position: absolute;
      bottom: 0.45rem;
      right: 0.45rem;
      font-size: 0.8rem;
    }
  `};
`;
