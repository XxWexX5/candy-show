import styled, { css } from "styled-components";

export const WrapperProductCheckout = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    padding: 2rem 1.35rem;
    padding-right: 3rem;
    width: 100%;
    border-radius: 0.3rem;
    overflow: hidden;

    section {
      height: 100%;
      padding-right: 5rem;

      > header {
        margin-bottom: 1.15rem;

        .title {
          font-weight: normal;
          font-size: 1rem;
        }
      }

      main {
        display: flex;
        align-items: center;

        .container-image-product {
          position: relative;
          width: 125px;
          height: 60px;

          img {
            object-fit: contain;
          }
        }

        .wrapper-price {
          width: 100%;
          max-width: 6.6em;
          position: relative;
          margin-left: 1.35rem;
          padding-top: 0.65rem;

          header {
            display: flex;
            font-size: 0.85rem;

            .text {
              font-size: 0.75rem;
              position: absolute;
              top: -0.4rem;
              left: 0;
            }

            .older-price {
              color: ${theme.colors.purple01};
              transform: scale(0.65);
              text-decoration: line-through;
              opacity: 0.65;
              white-space: nowrap;
              position: absolute;
              top: -0.4rem;
              right: 0.1rem;
            }
          }

          main {
            text-align: center;

            .value {
              font-weight: bold;
              font-size: 1.2rem;
            }
          }
        }

        .wrapper-amount {
          margin-left: 0.85rem;
          margin-top: -0.65rem;

          .title {
            color: ${theme.colors.purple01};
            font-size: 0.75rem;
            display: inline-block;
            margin-bottom: 0.3rem;
          }

          input {
            border-color: ${theme.colors.purple01};
            border-radius: 0.3rem;
            padding: 0.35rem 0rem 0.35rem 0.45rem;
            width: 100%;
          }
        }

        .wrapper-amount-value {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;

          .wrapper-arrow-up {
            position: absolute;
            top: 0.1em;
            right: 0.3em;
            cursor: pointer;
            transition: 0.35s opacity ease-in;

            &:hover {
              opacity: 0.65;
            }
          }

          .wrapper-arrow-down {
            position: absolute;
            bottom: -0.1em;
            right: 0.3em;
            cursor: pointer;
            transition: 0.35s opacity ease-in;

            &:hover {
              opacity: 0.65;
            }
          }
        }

        .wrapper-total {
          width: 100%;
          max-width: 6.6em;
          position: relative;
          margin-left: 1.35rem;
          padding-top: 0.65rem;

          header {
            display: flex;
            font-size: 0.85rem;

            .text {
              font-size: 0.75rem;
              position: absolute;
              top: -0.4rem;
              left: 0;
            }
          }

          main {
            text-align: center;

            .value {
              font-weight: bold;
              font-size: 1rem;
            }
          }
        }
      }
    }

    aside {
      background-color: ${theme.colors.gray01};
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 0.35rem;
      transition: 0.35s opacity ease-in-out;
      cursor: pointer;

      &:hover {
        opacity: 0.45;
      }

      .container-image {
        width: 2rem;
        height: 2rem;

        img {
          min-width: 1.65rem;
          min-height: 1.65rem;
        }
      }
    }
  `};
`;
