const API_URL = 'http://localhost:8080/dogs';

export const fetchDogs = async () => {
  const data = await fetch(API_URL).then((res) => res.json());

  return data;
};
