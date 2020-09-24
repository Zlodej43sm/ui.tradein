export default (theme) => ({
  errorDescription: {
    ...theme.mixins.alignment.alignCenter,
    color: theme.palette.error.main,
    marginTop: theme.spacing(0.5),
    fontSize: 13
  },
  inputWrapper: {
    ...theme.mixins.alignment.column
  },
  textField: {
    width: '100%'
  },
  alertIcon: {
    marginRight: theme.spacing(1),
    width: 20
  }
});
