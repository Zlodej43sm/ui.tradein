export default (theme) => ({
  wrapper: {
    width: 300,
    margin: theme.spacing(0, 'auto'),
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column'
  },
  textField: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  signInButton: {
    width: '100%',
    height: 42
  },
  title: {
    fontSize: 18,
    margin: theme.spacing(1.5, 'auto'),
    marginBottom: theme.spacing(2.5)
  }
});
