import styled, { css } from "styled-components";

export const WrapperCart = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
  `};
`;

export const Cart = styled.div`
  ${({ theme }) => css`
    width: 3.5rem;
    height: 3.5rem;
    position: relative;
  `};
`;

export const Amount = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.purple01};
    color: ${theme.colors.white};
    position: absolute;
    top: 0;
    right: -0.3rem;
    min-width: 1.65rem;
    min-height: 1.65rem;
    border-radius: 50% 50%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.1rem 0 0;

    &.big-circle {
      span {
        transform: translateX(-1px) scale(0.75);
      }
    }
  `};
`;

export const Price = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.green01};
    margin-left: 0.85rem;
    font-size: 1.2rem;
  `};
`;
