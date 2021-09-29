import { useContext, createContext, useEffect, useState } from 'react';

import { Response } from '../interfaces';
import { fetchDogs } from '../utils/fetchDogs';

export const CustomContext = createContext<Response>({});

export const useCustom = () => {
  const context = useContext(CustomContext);
  if (!context) {
    throw new Error(`Can't use "useCustom" without a CustomProvider!`);
  }

  return context;
};

const CustomProvider = ({ children }: any) => {
  const [response, setResponse] = useState<Response>({});

  useEffect(() => {
    fetchDogs().then(setResponse);
  }, []);

  return (
    <CustomContext.Provider value={response}>{children}</CustomContext.Provider>
  );
};

export default CustomProvider;
