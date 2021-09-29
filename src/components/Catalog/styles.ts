import styled from 'styled-components';

export const CatalogContainer = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;

  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const CatalogCard = styled.div`
  height: 425px;
  width: 30%;
  margin: 12px;
  border-radius: 8px;
  border: 1px solid #000;
  box-shadow: 4px 4px rgb(0 0 0 / 20%);

  @media screen and (max-width: 1040px) {
    width: 45%;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const CatalogCardImg = styled.img`
  width: 100%;
  height: 65%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

export const CatalogCardTitle = styled.h2`
  font-size: 18px;
  margin: 8px;
  text-transform: capitalize;

  @media screen and (max-width: 425px) {
    font-size: 16px;
  }
`;

export const HorizontalLine = styled.hr`
  margin: 8px;
`;

export const Button = styled.div`
  background-color: #6495ed;
  width: fit-content;
  padding: 8px;
  margin-left: 8px;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;

  @media screen and (max-width: 425px) {
    width: auto;
    margin-right: 8px;
    text-align: center;
  }
`;
