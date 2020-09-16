// node modules
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

//material components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { withStyles } from '@material-ui/core/styles';
import GroupIcon from '@material-ui/icons/Group';
import PagesIcon from '@material-ui/icons/Pages';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import SettingsIcon from '@material-ui/icons/Settings';

// local files
import styles from './styles';

const SideBar = ({ classes: { list, activeLink } }) => {
  const { t } = useTranslation();

  return (
    <List classes={{ root: list }}>
      <ListItem
        activeClassName={activeLink}
        pathname="/"
        to="/"
        component={NavLink}
        button
      >
        <ListItemIcon>
          <PagesIcon />
        </ListItemIcon>
        <ListItemText primary={t('Main page')} />
      </ListItem>
      <ListItem
        activeClassName={activeLink}
        pathname="/partners"
        to="/partners"
        component={NavLink}
        button
      >
        <ListItemIcon>
          <AccessibilityIcon />
        </ListItemIcon>
        <ListItemText primary={t('Partners')} />
      </ListItem>
      <ListItem
        activeClassName={activeLink}
        pathname="/users"
        to="/users"
        component={NavLink}
        button
      >
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary={t('Users')} />
      </ListItem>
      <ListItem
        activeClassName={activeLink}
        pathname="/orders"
        to="/orders"
        component={NavLink}
        button
      >
        <ListItemIcon>
          <FolderOpenIcon />
        </ListItemIcon>
        <ListItemText primary={t('Orders')} />
      </ListItem>
      <ListItem
        activeClassName={activeLink}
        pathname="/products"
        to="/products"
        component={NavLink}
        button
      >
        <ListItemIcon>
          <LocalMallIcon />
        </ListItemIcon>
        <ListItemText primary={t('Products')} />
      </ListItem>
      <ListItem
        activeClassName={activeLink}
        pathname="/configuration"
        to="/configuration"
        component={NavLink}
        button
      >
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary={t('Configuration')} />
      </ListItem>
    </List>
  );
};

export default withStyles(styles)(SideBar);
