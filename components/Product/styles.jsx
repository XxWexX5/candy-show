import styled, { css } from "styled-components";

export const ContainerProduct = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 17.5rem;
    padding: 0 1rem;

    @media screen and (min-width: ${theme.responsive.tablet}) {
      max-width: 30.5rem;
    }
  `};
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
    position: relative;
    padding-bottom: 4rem;

    @media screen and (min-width: ${theme.responsive.tablet}) {
      min-height: 30rem;
    }

    > .container-image {
      min-width: 239px;
      height: 77px;
      position: relative;

      @media screen and (min-width: ${theme.responsive.tablet}) {
        transform: scale(1.6);
      }

      img {
        object-fit: contain;
      }
    }

    .title {
      display: inline-block;
      color: ${theme.colors.white};
      font-weight: normal;
      font-size: 0.75rem;
      margin-top: 1rem;

      @media screen and (min-width: ${theme.responsive.tablet}) {
        font-size: 1.15rem;
        margin-top: 3rem;
      }
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

      @media screen and (min-width: ${theme.responsive.tablet}) {
        transform: scale(0.85);
        right: -0.2rem;
      }
    }

    .price {
      color: ${theme.colors.white};
      display: inline-block;
      font-weight: bold;
      font-size: 1.25rem;

      @media screen and (min-width: ${theme.responsive.tablet}) {
        font-size: 1.85rem;
      }
    }
  `};
`;

export const WrapperButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};
    font-size: 0.65rem;
    border: 1px solid;
    border-radius: 0.3rem;
    padding: 0.35rem 0.45rem;
    width: 100%;
    cursor: pointer;
    transition: 0.35s opacity ease-in-out;
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    transform: scale(0.9);

    @media screen and (min-width: ${theme.responsive.tablet}) {
      padding: 0.75rem 0;
    }

    &:hover {
      opacity: 0.65;
    }

    .container-image {
      position: relative;
      width: 1.45rem;
      height: 1.45rem;
      margin-right: 0.35rem;
    }

    .text {
      margin-left: 0.35rem;

      @media screen and (min-width: ${theme.responsive.tablet}) {
        font-size: 1.25rem;
      }
    }
  `};
`;

export const ControlAmount = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.65rem;

    @media screen and (min-width: ${theme.responsive.tablet}) {
      font-size: 2rem;
    }

    button {
      background-color: transparent;
      border: 0;
      color: ${theme.colors.purple01};
      font-size: 1.45rem;
      cursor: pointer;
      transition: 0.35s opacity ease-in-out;

      @media screen and (min-width: ${theme.responsive.tablet}) {
        font-size: 2.35rem;
      }

      &:hover {
        opacity: 0.2;
      }

      &.button-less {
        padding-bottom: 0rem;
      }
    }
  `};
`;
