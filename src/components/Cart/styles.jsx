import styled, { css } from "styled-components";

export const WrapperCart = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    transition: 0.35s opacity ease-in;
    cursor: pointer;

    &:hover {
      opacity: 0.65;
    }
  `};
`;

export const Cart = styled.div`
  ${({ theme }) => css`
    width: 2.35rem;
    height: 2.35rem;
    position: relative;
  `};
`;

export const Amount = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.purple01};
    color: ${theme.colors.white};
    position: absolute;
    top: -0.3rem;
    right: -0.3rem;
    min-width: 1.35rem;
    min-height: 1.35rem;
    border-radius: 50% 50%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.1rem 0 0;
    font-size: 0.9rem;

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
    font-size: 1.1rem;
  `};
`;
