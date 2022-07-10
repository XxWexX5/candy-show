import styled, { css } from "styled-components";

export const WrapperCheckout = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 2.65rem;

    @media screen and (min-width: ${theme.responsive.desktop}) {
      margin-top: 0;
      margin-left: 3rem;
    }
  `};
`;

export const Delivery = styled.header`
  .title {
    font-weight: normal;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .container-info {
    border-radius: 0.35rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    padding: 1rem 1.35rem;

    .text {
      font-size: 1rem;
    }
  }
`;

export const Shipping = styled.main`
  ${({ theme }) => css`
    margin-top: 2.3rem;

    .wrapper-shipping {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
      font-size: 1.1rem;

      .text-shipping {
        color: ${theme.colors.green01};
        font-weight: bold;
      }
    }

    .wrapper-total {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
      font-size: 1.1rem;

      .text,
      .text-total {
        font-weight: bold;
      }
    }
  `};
`;

export const Button = styled.button`
  ${({ theme }) => css`
    width: 100%;
    border: 0;
    background-color: ${theme.colors.green01};
    border-radius: 0.15rem;
    padding: 0.85rem 0;
    font-weight: bold;
    font-size: 1.35rem;
    color: ${theme.colors.purple01};
    cursor: pointer;
    transition: all 0.35s ease-in-out;

    &:hover {
      background-color: ${theme.colors.purple01};
      color: ${theme.colors.green01};
    }
  `};
`;
