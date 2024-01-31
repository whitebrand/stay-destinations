import { getTranslatableName } from './i18n';

describe('i18n utils', () => {
  describe('getTranslatableName function', () => {
    it('returns translated name for the language code saved in the local storage', () => {
      // The fake selected language code is 'es'
      // @ts-expect-error
      expect(getTranslatableName({
        es: 'cadena traducida al español',
      })).toEqual('cadena traducida al español');
    });
  
    it('returns translated name for the fallback language code if selected language code is not set', () => {
      // The fake selected language code is 'es'
      // @ts-expect-error
      expect(getTranslatableName({
        en: 'english translated string',
      })).toEqual('english translated string');
    });
  });
});
