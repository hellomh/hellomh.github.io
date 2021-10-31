import {supportedLanguages} from './../../i18n';

export const codeToLanguage = code => {
  return supportedLanguages[code].replace(/ /g, ' ' /* nbsp */);
};
