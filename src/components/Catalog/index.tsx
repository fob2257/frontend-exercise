import React from 'react';

import {
  CatalogContainer,
  CatalogCard,
  CatalogCardImg,
  CatalogCardTitle,
  HorizontalLine,
  Button
} from './styles';
import { useCustom } from '../../providers/Custom.provider';

import { Dog } from '../../interfaces';

interface Props {
  dogs: Dog[];
  showAdoptBtn?: boolean;
}

const Catalog = ({ dogs, showAdoptBtn = false }: Props) => {
  const ctx = useCustom();

  const handleAdopt = (dog: Dog) => ctx.addToCart && ctx.addToCart(dog);

  return (
    <CatalogContainer>
      {dogs.map((dog, idx) => (
        <CatalogCard key={`${idx}-${dog.id}`}>
          <CatalogCardImg src={dog.url} alt={dog.title} />
          <CatalogCardTitle>{dog.title}</CatalogCardTitle>
          <HorizontalLine />
          {showAdoptBtn && (
            <Button onClick={() => handleAdopt(dog)}>Adopt</Button>
          )}
        </CatalogCard>
      ))}
    </CatalogContainer>
  );
};

export default Catalog;
