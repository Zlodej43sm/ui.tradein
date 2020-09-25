export default (theme) => ({
  wrapper: {
    width: 300,
    margin: theme.spacing(0, 'auto'),
    ...theme.mixins.alignment.column
  },
  textField: {
    marginBottom: theme.spacing(2)
  },
  title: {
    fontSize: 18,
    margin: theme.spacing(1.5, 'auto'),
    marginBottom: theme.spacing(2.5)
  },
  signInButton: {
    width: '100%',
    height: 42
  },
  forgottenPass: {
    fontSize: 14,
    marginBottom: theme.spacing(3.5),
    cursor: 'pointer'
  },
});
