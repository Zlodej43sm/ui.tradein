// node modules
import React from 'react';

// material components
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WorkIcon from '@material-ui/icons/Work';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const getItemListsConfig = ({ username, email, roles }) => {
  return [
    {
      text: username,
      icon: (props) => <PersonIcon {...props} />,
      button: false
    },
    {
      text: email,
      icon: (props) => <MailOutlineIcon {...props} />,
      button: false
    },
    {
      text: roles[0],
      icon: (props) => <WorkIcon {...props} />,
      button: false
    },
    {
      text: 'Log Out',
      icon: (props) => <ExitToAppIcon {...props} />,
      button: true
    }
  ];
};
