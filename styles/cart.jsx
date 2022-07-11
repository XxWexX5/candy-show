import styled, { css } from "styled-components";

export const Cart = styled.div`
  ${({ theme }) => css`
    .container-main {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-between;
      padding-top: 5rem;
      padding-bottom: 8.5rem;

      @media screen and (min-width: ${theme.responsive.desktop}) {
        flex-direction: row;
      }

      .wrapper-products-checkout {
        overflow-y: scroll;
        height: 65vh;
        padding-right: 1rem;
        margin-right: -1rem;
        width: 100%;
        padding: 0.5rem 1rem 1rem;

        &.no-overflow {
          overflow-y: hidden;
          height: 100%;
        }

        .wrapper-product-checkout + .wrapper-product-checkout {
          margin-top: 1.35rem;
        }
      }
    }
  `};
`;
