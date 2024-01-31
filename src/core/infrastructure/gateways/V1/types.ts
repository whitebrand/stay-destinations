import { TsFixMeType } from '../../../../utils/types/helpers.types';

export type Response<T> = {
  success: boolean;
  data: T;
  error: TsFixMeType;
};

export type LanguageCode = 'de' | 'en' | 'es' | 'fr' | 'it' | 'pt';

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type TranslatableName = {
  [languageCode in LanguageCode]: string;
};
