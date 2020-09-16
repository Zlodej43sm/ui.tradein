// node modules
import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

// material components
import { withStyles } from '@material-ui/core/styles';

// local files
import styles from './styles';

const Content = ({ auth, classes: { content, status, authContent } }) => {
  const contentClass = classNames(content, { [authContent]: auth });
  const { t } = useTranslation();

  return (
    <div className={contentClass}>
      <span className={status}>404</span>
      {t('PAGE NOT FOUND')}
    </div>
  );
};

export default withStyles(styles)(Content);
