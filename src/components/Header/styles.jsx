import styled, { css } from "styled-components";

export const WrapperHeader = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.purple04};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `};
`;
