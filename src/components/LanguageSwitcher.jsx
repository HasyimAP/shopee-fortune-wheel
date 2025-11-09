import { useLanguage } from '../contexts/LanguageContext';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className="language-switcher" 
      onClick={toggleLanguage}
      title={language === 'en' ? 'Switch to Indonesian' : 'Ganti ke Bahasa Inggris'}
    >
      <span className="language-icon">🌐</span>
      <span className="language-text">
        {language === 'en' ? 'ID' : 'EN'}
      </span>
    </button>
  );
}

export default LanguageSwitcher;
