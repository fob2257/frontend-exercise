import { useContext, createContext, useEffect, useState } from 'react';

import { Response, Dog } from '../interfaces';
import { fetchDogs } from '../utils/fetchDogs';

interface IContext {
  response?: Response;
  cart?: Dog[];
  adoptedDogs?: Dog[];
  availableDogs?: Dog[];
  addToCart?: (dog: Dog) => void;
  removeFromCart?: (dog: Dog) => void;
  completeAdoption?: () => void;
}

export const CustomContext = createContext<IContext>({});

export const useCustom = () => {
  const context = useContext(CustomContext);
  if (!context) {
    throw new Error(`Can't use "useCustom" without a CustomProvider!`);
  }

  return context;
};

const CustomProvider = ({ children }: any) => {
  const [cart, setCart] = useState<Dog[]>([]);
  const [adoptedDogs, setAdoptedDogs] = useState<Dog[]>([]);
  const [availableDogs, setAvailableDogs] = useState<Dog[]>([]);
  const [response, setResponse] = useState<Response>({});

  useEffect(() => {
    fetchDogs().then(setResponse);
  }, []);

  useEffect(() => {
    if (response?.data) {
      let dogs = response.data;
      const unavailableDogs = [...adoptedDogs, ...cart];

      dogs = dogs.filter(
        (dog) => !unavailableDogs.some((uDog) => uDog.id === dog.id)
      );

      setAvailableDogs(dogs);
    }
  }, [response, adoptedDogs, cart]);

  const addToCart = (dog: Dog) => setCart([...cart, dog]);

  const removeFromCart = (dog: Dog) => {
    const filteredCart = cart.filter((cartDog) => cartDog.id !== dog.id);

    setCart(filteredCart);
  };

  const completeAdoption = () => {
    setAdoptedDogs([...adoptedDogs, ...cart]);
    setCart([]);
  };

  return (
    <CustomContext.Provider
      value={{
        response,
        cart,
        adoptedDogs,
        availableDogs,
        addToCart,
        removeFromCart,
        completeAdoption
      }}
    >
      {children}
    </CustomContext.Provider>
  );
};

export default CustomProvider;
