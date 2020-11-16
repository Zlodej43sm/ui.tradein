export default (theme) => ({
  wrapper: {
    padding: theme.spacing(1, 2),
    borderRadius: theme.shape.borderRadius,
    display: 'inline-block',
    color: theme.palette.common.white
  },
  newColor: {
    background: theme.palette.green[600]
  },
  pendingColor: {
    background: theme.palette.grey[500]
  },
  finishedColor: {
    background: theme.palette.orange[700]
  },
  infoColor: {
    background: theme.palette.info.dark
  }
});
