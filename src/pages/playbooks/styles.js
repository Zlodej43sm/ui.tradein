export default (theme) => ({
  wrapper: {
    padding: theme.spacing(0, 4),
    marginTop: theme.spacing(-13),
    '& > h3': {
      marginTop: theme.spacing(5)
    }
  },
  stateLabel: {
    marginRight: theme.spacing(1)
  },
  infoLink: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
});
