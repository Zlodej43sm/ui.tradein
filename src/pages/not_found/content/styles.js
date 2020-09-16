export default (theme) => ({
  content: {
    ...theme.mixins.alignment.columnCenter,
    margin: theme.spacing(0, 'auto'),
    color: 'rgba(0,0,0, 0.5)',
    fontSize: 45
  },
  status: { fontSize: 130 },
  authContent: {
    marginTop: theme.spacing(20)
  }
});
