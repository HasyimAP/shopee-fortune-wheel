import { en } from './en';
import { id } from './id';

export const translations = {
  en,
  id
};

export const getTranslation = (language) => {
  return translations[language] || translations.en;
};
