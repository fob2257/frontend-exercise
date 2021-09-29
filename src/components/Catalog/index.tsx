import React from 'react';

import {
  CatalogContainer,
  CatalogCard,
  CatalogCardImg,
  CatalogCardTitle,
  HorizontalLine
} from './styles';

interface Props {
  items: any[];
}

const Catalog = ({ items }: Props) => (
  <CatalogContainer>
    {items.map((dog: { id: string; title: string; url: string }, idx) => (
      <CatalogCard key={`${idx}-${dog.id}`}>
        <CatalogCardImg src={dog.url} alt={dog.title} />
        <CatalogCardTitle>{dog.title}</CatalogCardTitle>
        <HorizontalLine />
      </CatalogCard>
    ))}
  </CatalogContainer>
);

export default Catalog;
