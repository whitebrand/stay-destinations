// TODO: This is not the best solution because the function must be able to handle different API version formats 
// but it is just a simple way to emulate with the provided translatableName node format
import { LanguageCode, TranslatableName } from '../core/infrastructure/gateways/V1/types';

const FALLBACK_LANGUAGE_CODE: LanguageCode = 'en';
const FAKE_LOCAL_STORAGE_LANGUAGE_CODE: LanguageCode = 'es';

export const getTranslatableName = (translatableName: TranslatableName) => {
  if (translatableName[FAKE_LOCAL_STORAGE_LANGUAGE_CODE]) {
    return translatableName[FAKE_LOCAL_STORAGE_LANGUAGE_CODE];
  } else {
    return translatableName[FALLBACK_LANGUAGE_CODE];
  }
};
