// node modules
import React, { useState } from 'react';
import values from 'lodash/values';

// material component
import LanguageIcon from '@material-ui/icons/Language';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

// local files
import i18next from 'i18next/config';
import { languages } from 'common/config';
import styles from './styles';

const LanguageBar = ({ classes: { btnIcon } }) => {
  const { language: lng } = i18next;
  const [anchor, setAnchor] = useState();
  const [language, setLanguage] = useState(languages[lng]);
  const handleOpen = ({ target }) => setAnchor(target);
  const handleClose = () => setAnchor(null);
  const choseLanguage = (lng) => {
    const { value } = lng;
    setLanguage(lng);
    localStorage.setItem('lang_key', value);
    i18next.changeLanguage(value);
    handleClose();
  };
  const { displayValue } = language;

  return (
    <div>
      <Button aria-controls="menu" aria-haspopup="true" onClick={handleOpen}>
        <LanguageIcon classes={{ root: btnIcon }} color="primary" />
        {displayValue}
      </Button>
      <Menu
        id="menu"
        anchorEl={anchor}
        keepMounted
        open={!!anchor}
        onClose={handleClose}
      >
        {values(languages).map((lng) => (
          <MenuItem key={lng.value} onClick={() => choseLanguage(lng)}>
            {lng.displayValue}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default withStyles(styles)(LanguageBar);
