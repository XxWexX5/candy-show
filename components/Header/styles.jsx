import styled, { css } from "styled-components";

export const WrapperHeader = styled.header`
  ${({ theme }) => css`
    padding: 1.15rem 1.35rem;
    background-color: ${theme.colors.purple04};

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `};
`;
