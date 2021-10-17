import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import FastImage from 'react-native-fast-image';

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
    <FastImage source={{ uri: image }} style={styles.image} resizeMode={'contain'} />
  ) : (
    <Text>{t(`common:empty_image`)}</Text>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export default DogImage;
