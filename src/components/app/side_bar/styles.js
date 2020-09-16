export default (theme) => ({
  list: {
    width: 250,
    position: 'fixed',
    paddingTop: theme.spacing(12),
    top: 0,
    left: 0,
    height: '100vh',
    borderRight: '1px solid rgba(0, 0, 0, 0.12)',
    boxShadow: theme.shadows[4]
  },
  activeLink: {
    background: 'rgba(0, 0, 0, 0.12)'
  }
});
