// node modules
import React from 'react';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation();
  return <div>{t('common:home_page_title')}</div>;
};

export default App;
