import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router';

export const useAppNavigation = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const location = useLocation();

  const changeLanguage = (lang: string): void => {
    i18n.changeLanguage(lang);

    const pathToArray = location.pathname.slice(1).split('/');
    pathToArray[0] = lang;
    
    navigate(`/${pathToArray.join('/')}`);
  }

  const goToHome = (): void => {
    navigate(`/${i18n.language}`);
  };

  const getStorePath = (id: string): string => {
    return `/${i18n.language}/store/${id}`;
  }

  const goToStore = (id: string): void => {
    navigate(getStorePath(id));
  };

  const goToNotFound = (): void => {
    navigate('*');
  };

  return { changeLanguage, goToHome, getStorePath, goToStore, goToNotFound };
};