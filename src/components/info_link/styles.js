export default (theme) => ({
  wrapper: {
    width: 290,
    height: 100,
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    textDecoration: 'none',
    textAlign: 'center',
    ...theme.mixins.alignment.columnFullCenter,
    display: 'inline-flex',
    boxShadow: theme.shadows[3]
  },
  countClass: {
    fontSize: 36
  },
  light: {
    color: theme.palette.grey[700]
  },
  green: {
    background: theme.palette.green[700]
  },
  lightGreen: {
    background: theme.palette.green[500]
  },
  darkGreen: {
    background: theme.palette.green[900]
  },
  red: {
    background: theme.palette.red[600]
  },
  dark: {
    background: theme.palette.grey[900]
  },
  grey: {
    background: theme.palette.grey[700]
  },
  lightGrey: {
    background: theme.palette.grey[500]
  },
  orange: {
    background: theme.palette.orange[700]
  }
});
