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
import WorkIcon from '@material-ui/icons/Work';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import IconButton from '@material-ui/core/IconButton';

// local files
import { SET_USER_INFO } from '../../store/types';
import { getUserInfo } from '../../common/utils';
import { logOut } from '../../api';
import styles from './styles';

const UserInfo = ({ classes: { paper, infoWrapper, icon } }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const userInfo = useSelector(({ userInfo }) => userInfo);
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const handleClose = () => setOpen(false);
  const { username, email, roles } = userInfo;

  useEffect(() => {
    const storageInfo = getUserInfo();
    if (!userInfo.id && storageInfo) {
      dispatch({ type: SET_USER_INFO, payload: storageInfo });
    }
  }, [dispatch, userInfo]);

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div className={infoWrapper}>
        <IconButton onClick={toggleMenu}>
          <PersonIcon color="secondary" />
        </IconButton>
        <div className={paper}>
          <Grow in={open}>
            <Paper>
              <ListItem>
                <ListItemIcon>
                  <PersonIcon classes={{ root: icon }} />
                </ListItemIcon>
                <ListItemText primary={username} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <MailOutlineIcon classes={{ root: icon }} />
                </ListItemIcon>
                <ListItemText primary={email} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <WorkIcon classes={{ root: icon }} />
                </ListItemIcon>
                <ListItemText primary={t(roles[0])} />
              </ListItem>
              <ListItem button onClick={logOut}>
                <ListItemIcon>
                  <ExitToAppIcon classes={{ root: icon }} />
                </ListItemIcon>
                <ListItemText primary={t('Log Out')} />
              </ListItem>
            </Paper>
          </Grow>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default withStyles(styles)(UserInfo);
