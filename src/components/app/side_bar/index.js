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

// local files
import links from './config';
import styles from './styles';

const SideBar = ({ classes: { list, activeLink } }) => {
  const { t } = useTranslation();

  return (
    <List classes={{ root: list }}>
      {links.map(({ to, icon: Icon, key }) => (
        <ListItem
          exact
          activeClassName={activeLink}
          pathname={to}
          to={to}
          component={NavLink}
          button
          key={key}
        >
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={t(key)} />
        </ListItem>
      ))}
    </List>
  );
};

export default withStyles(styles)(SideBar);
