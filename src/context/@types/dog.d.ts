type DogApiType = 'GetDogBreeds' | 'GetRandomImage' | 'Fail' | 'Request';

interface DogState {
  loading: boolean;
  dogBreeds?: string[];
  randomImage?: string;
  error?: any;
}

type DogAction = {
  type: DogApiType;
  loading: boolean;
  result?: string | string[];
  error?: any;
};
