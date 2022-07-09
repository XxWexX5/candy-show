import styled, { css } from "styled-components";

export const ContainerProduct = styled.div`
  width: 100%;
  max-width: 13.5rem;
`;

export const WrapperProduct = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.purple01};
    display: inline-flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0.85rem 1.6rem 1.5rem;
    border-radius: 0.4rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    .title {
      display: inline-block;
      color: ${theme.colors.white};
      font-weight: normal;
      font-size: 0.85rem;
      margin-top: 1rem;
    }
  `};
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    display: inline-block;
    color: ${theme.colors.white};
    font-weight: normal;
    font-size: 0.85rem;
    margin-top: 1rem;
  `};
`;

export const WrapperPrice = styled.div`
  ${({ theme }) => css`
    margin: 2.35rem 0 1.25rem;
    text-align: center;
    position: relative;

    .older-price {
      position: absolute;
      top: -1rem;
      right: -0.8rem;
      color: ${theme.colors.white};
      transform: scale(0.65);
      text-decoration: line-through;
      opacity: 0.65;
    }

    .price {
      color: ${theme.colors.white};
      display: inline-block;
      font-weight: bold;
      font-size: 1.25rem;
    }
  `};
`;

export const WrapperButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.white};
    font-size: 0.65rem;
    border: 1px solid;
    border-radius: 0.3rem;
    padding: 0.35rem 0.45rem;
    width: 100%;
    cursor: pointer;
    transition: 0.35s opacity ease-in-out;

    &:hover {
      opacity: 0.65;
    }

    .text {
      margin-left: 0.35rem;
    }
  `};
`;

export const ControlAmount = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      background-color: transparent;
      border: 0;
      color: ${theme.colors.purple01};
      font-size: 1.15rem;
      cursor: pointer;
      transition: 0.35s opacity ease-in-out;

      &:hover {
        opacity: 0.2;
      }

      &.button-less {
        padding-bottom: 0.3rem;
      }
    }
  `};
`;
