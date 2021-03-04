interface IDog {
  isLoading: boolean;
  dogBreeds?: string[];
  randomImage: string;
  getDogBreeds: () => void;
  getRandomImage: () => void;
}
