import React, { useState, createContext } from 'react';

import ApiDog from '../../api/ApiDog';

const defaultContext: IDog = {
  isLoading: false,
  dogBreeds: [],
  randomImage: '',
  getDogBreeds: () => {},
  getRandomImage: () => {},
};

const DogContext = createContext(defaultContext);

interface IProps {
  children: JSX.Element | Array<JSX.Element>;
}

const DogContextProvider = ({ children }: IProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dogBreeds, setDogBreeds] = useState<string[]>();
  const [randomImage, setRandomImage] = useState<string>('');

  const getDogBreeds = async () => {
    setIsLoading(true);
    const res = await ApiDog.getAllBreeds();
    if (res.ok && res.result) {
      const getList: Record<string, string[]>[] = res.result.message;
      getList && setDogBreeds(Object.keys(getList));
    }
    setIsLoading(false);
  };

  const getRandomImage = async () => {
    setIsLoading(true);
    const res = await ApiDog.getRandomImage();
    if (res.ok && res.result) {
      res.result.message && setRandomImage(res.result.message);
    } else {
      return undefined;
    }
    setIsLoading(false);
  };

  return (
    <DogContext.Provider value={{ isLoading, dogBreeds, randomImage, getDogBreeds, getRandomImage }}>
      {children}
    </DogContext.Provider>
  );
};

export { DogContext, DogContextProvider };
