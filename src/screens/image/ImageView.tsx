import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import Button from '../../components/Button';
import DogImage from './modules/DogImage';
import { useTranslation } from 'react-i18next';
import { RootState } from '../../redux/dog';
import { dogAction } from '../../redux/dog/DogDispatch';
import Colors from '../../values/color/Colors';

const ImageView = () => {
  const { t } = useTranslation();
  const { randomImage, loading } = useSelector((state: RootState) => state.dogReducer, shallowEqual);
  const dispatch = useDispatch();
  const onGetImage = () => dogAction('GetRandomImage', dispatch);

  return (
    <View style={styles.container}>
      <Button
        title={t(`common:load_image`)}
        onPress={onGetImage}
        buttonStyle={{ borderWidth: 1, borderRadius: 10, backgroundColor: Colors.white }}
      />
      <View style={styles.imageLayout}>
        <DogImage imageUrl={randomImage} isLoading={loading} />
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
