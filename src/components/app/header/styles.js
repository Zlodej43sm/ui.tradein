export default (theme) => ({
  header: {
    minWidth: 0,
    width: '100%',
    height: 80,
    padding: theme.spacing(0, 5),
    boxShadow: theme.shadows[4],
    ...theme.mixins.alignment.betweenCenter,
    position: 'fixed',
    top: 0,
    left: 0,
    background: 'white',
    zIndex: 1
  },
  rightBar: {
    ...theme.mixins.alignment.center
  },
  link: {
    textDecoration: 'none'
  }
});
