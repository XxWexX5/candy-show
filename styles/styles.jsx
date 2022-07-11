import styled, { css } from "styled-components";

export const App = styled.main`
  ${({ theme }) => css`
    color: ${theme.colors.purple01};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    height: 100%;
    margin-top: 16rem;

    .wrapper-products {
      height: 100vh;
      padding-top: 80%;

      @media screen and (min-width: ${theme.responsive.tablet}) {
        padding-top: 35%;
      }

      @media screen and (min-width: ${theme.responsive.desktop}) {
        padding-top: 10%;
      }
    }

    .swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
  `};
`;
