import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  margin: 0 auto 16px auto;
  box-shadow: 0 4px 8px 2px rgb(0 0 0 / 20%);
`;

export const Title = styled.h1<any>`
  margin: 8px;
  text-align: center;
  text-transform: uppercase;
  font-size: 24px;
  ${(props) =>
    props.grow &&
    css`
      flex-grow: 1;
    `}

  @media screen and (max-width: 425px) {
    font-size: 18px;
  }
`;
