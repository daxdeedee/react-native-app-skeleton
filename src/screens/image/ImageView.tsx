import React from 'react';
import { View, StyleSheet } from 'react-native';

import Button from '../../components/Button';
import DogImage from './modules/DogImage';
import { useTranslation } from 'react-i18next';

import { useDispatchContext, useStateContext } from '../../context/dog/DogContext';
import { dispatchAction } from '../../context/dog/DogDispatch';
import Colors from '../../values/color/Colors';

const ImageView = () => {
  const { t } = useTranslation();
  const state = useStateContext();
  const dispatch = useDispatchContext();
  const getBreeds = () => dispatchAction('GetRandomImage', dispatch);

  return (
    <View style={styles.container}>
      <Button
        title={t(`common:load_image`)}
        onPress={getBreeds}
        borderWidth={1}
        borderRadius={10}
        bgColor={Colors.white}
      />
      <View style={styles.imageLayout}>
        <DogImage imageUrl={state.randomImage} isLoading={state.loading} />
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
