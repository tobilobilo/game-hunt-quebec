import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const usePageTitle = (title: string) => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = title;
        
        return () => {
            document.title = `${t('title')} | ${t('motto')}`;
        };
    }, [title, t]);
};

export default usePageTitle;