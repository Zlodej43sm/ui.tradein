export default (theme) => ({
  paper: {
    width: '100%',
    height: theme.spacing(10),
    padding: theme.spacing(0, 3),
    ...theme.mixins.alignment.betweenCenter
  },
  headerTitle: {
    fontSize: 20
  },
  buttonRoot: {
    marginLeft: theme.spacing(2),
    '& svg': {
      marginRight: theme.spacing(1)
    }
  }
});
