export default (theme) => ({
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#e10351',
    margin: '0 auto'
  },
  icon: {
    color: '#fff'
  },
  textField: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  title: {
    fontSize: 14,
    margin: theme.spacing(1.5, 'auto'),
    marginBottom: theme.spacing(1.5),
    textAlign: 'center'
  },
  signInButton: {
    width: '100%',
    height: 42
  },
  wrapper: {
    width: 300,
    margin: theme.spacing(0, 'auto'),
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column'
  }
});
