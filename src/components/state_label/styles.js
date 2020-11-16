export default (theme) => ({
  wrapper: {
    padding: theme.spacing(1, 2),
    borderRadius: theme.shape.borderRadius,
    display: 'inline-block',
    color: theme.palette.common.white
  },
  new: {
    background: theme.palette.green[600]
  },
  pending: {
    background: theme.palette.grey[500]
  },
  finished: {
    background: theme.palette.orange[700]
  },
  info: {
    background: theme.palette.info.dark
  }
});
