// node modules
import React from 'react';
import { useTranslation } from "react-i18next";

const App = () => {
    const { t } = useTranslation();
    return <div>{t('common:test_value')}</div>;
}

export default App;