type DogApiType = 'GetDogBreeds' | 'GetRandomImage' | 'Fail' | 'Request';

interface IDogState {
  loading: boolean;
  dogBreeds?: string[];
  randomImage?: string;
  error?: any;
}

interface IDogAction {
  type: DogApiType;
  loading: boolean;
  result?: string | string[];
  error?: any;
}
