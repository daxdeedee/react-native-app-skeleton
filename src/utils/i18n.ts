import { Platform, NativeModules } from 'react-native';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../values/locales/en/en.json';
import ko from '../values/locales/ko/ko.json';
const resources = { en, ko };

const locale =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    debug: true,
    resources,
    lng: 'ko',
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {},
  });

export default i18n;
