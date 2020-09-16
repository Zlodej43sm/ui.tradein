// node modules
import React from 'react';

// material components
import GroupIcon from '@material-ui/icons/Group';
import PagesIcon from '@material-ui/icons/Pages';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';

export default [
  {
    to: '/',
    icon: () => <PagesIcon />,
    key: 'Main page'
  },
  {
    to: '/partners',
    icon: () => <AccessibilityIcon />,
    key: 'Partners'
  },
  {
    to: '/users',
    icon: () => <GroupIcon />,
    key: 'Users'
  },
  {
    to: '/orders',
    icon: () => <FolderOpenIcon />,
    key: 'Orders'
  },
  {
    to: '/products',
    icon: () => <LocalMallIcon />,
    key: 'Products'
  },
  {
    to: '/configuration',
    icon: () => <PermDataSettingIcon />,
    key: 'Configuration'
  }
];
