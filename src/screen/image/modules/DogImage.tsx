import React, { useState, useEffect } from 'react';
import { Image, ActivityIndicator } from 'react-native';

import Colors from '../../../values/color/Colors';

interface IProps {
  imageUrl: string;
  isLoading: boolean;
}

const DogImage = ({ imageUrl, isLoading }: IProps) => {
  const [image, setImage] = useState<string>(imageUrl);

  useEffect(() => {
    imageUrl && setImage(imageUrl);
  }, [imageUrl]);

  return isLoading ? (
    <ActivityIndicator size="large" color={Colors.blue} />
  ) : image ? (
    <Image source={{ uri: image }} style={{ width: '100%', height: '100%' }} resizeMode={'contain'} fadeDuration={0} />
  ) : (
    <></>
  );
};

export default DogImage;
