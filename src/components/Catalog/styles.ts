import styled from 'styled-components';

export const CatalogContainer = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
`;

export const CatalogCard = styled.div`
  height: 425px;
  width: 30%;
  margin: 12px;
  border-radius: 8px;
  border: 1px solid #000;
  box-shadow: 4px 4px rgb(0 0 0 / 20%);
`;

export const CatalogCardImg = styled.img`
  width: 100%;
  height: 65%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

export const CatalogCardTitle = styled.h2`
  font-size: 20px;
  margin: 8px;
`;

export const HorizontalLine = styled.hr`
  width: 90%;
`;
