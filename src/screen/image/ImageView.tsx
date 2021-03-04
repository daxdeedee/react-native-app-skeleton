import React, { useContext, useState, useMemo } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Button from '../../components/Button';
import DogImage from './modules/DogImage';
import { useTranslation } from 'react-i18next';

import { DogContext } from '../../context/dog/DogContext';
import Colors from '../../values/color/Colors';

const ImageView = () => {
  const { t } = useTranslation();
  const { isLoading, randomImage, getRandomImage } = useContext(DogContext);

  return (
    <View style={styles.container}>
      <Button
        title={t(`common:load_image`)}
        onPress={getRandomImage}
        borderWidth={1}
        borderRadius={10}
        bgColor={Colors.white}
      />
      <View style={styles.imageLayout}>
        <DogImage imageUrl={randomImage} isLoading={isLoading} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  imageLayout: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '60%',
    backgroundColor: Colors.gray,
  },
});

export default ImageView;
