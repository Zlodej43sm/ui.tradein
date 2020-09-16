// node modules
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

// material components
import PersonIcon from '@material-ui/icons/Person';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import ListItemText from '@material-ui/core/ListItemText';
import Grow from '@material-ui/core/Grow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';

// local files
import { getItemListsConfig } from './config';
import { SET_USER_INFO } from '../../store/types';
import { getUserInfo, getUniqId } from '../../common/utils';
import { logOut } from '../../api';
import styles from './styles';

const UserInfo = ({ classes: { paper, infoWrapper, icon } }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const userInfo = useSelector(({ userInfo }) => userInfo);
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const storageInfo = getUserInfo();
    if (!userInfo.id && storageInfo) {
      dispatch({ type: SET_USER_INFO, payload: storageInfo });
    }
  }, [dispatch, userInfo]);

  const items = getItemListsConfig(userInfo);

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div className={infoWrapper}>
        <IconButton onClick={toggleMenu}>
          <PersonIcon color="secondary" />
        </IconButton>
        <div className={paper}>
          <Grow in={open}>
            <Paper>
              {items.map(({ text, icon: Icon, button }) => {
                const props = button ? { onClick: logOut, button } : {};

                return (
                  <ListItem key={getUniqId()} {...props}>
                    <ListItemIcon>
                      <Icon classes={{ root: icon }} />
                    </ListItemIcon>
                    <ListItemText primary={t(text)} />
                  </ListItem>
                );
              })}
            </Paper>
          </Grow>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default withStyles(styles)(UserInfo);
