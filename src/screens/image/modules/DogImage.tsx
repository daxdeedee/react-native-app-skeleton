import React, { useState, useEffect } from 'react';
import { Image, ActivityIndicator, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import Colors from '../../../values/color/Colors';

interface IProps {
  imageUrl?: string;
  isLoading: boolean;
}

const DogImage = ({ imageUrl, isLoading }: IProps) => {
  const { t } = useTranslation();
  const [image, setImage] = useState<string | undefined>(imageUrl);

  useEffect(() => {
    imageUrl && setImage(imageUrl);
  }, [imageUrl]);

  return isLoading ? (
    <ActivityIndicator size="large" color={Colors.blue} />
  ) : image ? (
    <Image source={{ uri: image }} style={{ width: '100%', height: '100%' }} resizeMode={'contain'} fadeDuration={0} />
  ) : (
    <Text>{t(`common:empty_image`)}</Text>
  );
};

export default DogImage;
