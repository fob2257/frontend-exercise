import React, { useState, useEffect } from 'react';

import {
  CatalogContainer,
  CatalogCard,
  CatalogCardImg,
  CatalogCardTitle,
} from './Catalog.styles';

const API_URL = 'http://localhost:8080/dogs';

const fetchDogs = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data;
};

const mapDogs = (dogs: { id: string; title: string; url: string }[]) =>
  dogs.map((dog, idx) => (
    <CatalogCard key={`${idx}-${dog.id}`}>
      <CatalogCardImg src={dog.url} alt={dog.title} />
      <CatalogCardTitle>{dog.title}</CatalogCardTitle>
    </CatalogCard>
  ));

const Catalog = () => {
  const [dogsData, setDogsData] = useState<any>({});

  useEffect(() => {
    fetchDogs().then(setDogsData);
  }, []);

  useEffect(() => {
    console.log(dogsData);
  }, [dogsData]);

  const dogs = (dogsData?.data).slice(6, 12);

  return <CatalogContainer>{mapDogs(dogs)}</CatalogContainer>;
};

export default Catalog;
