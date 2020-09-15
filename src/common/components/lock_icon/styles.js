export default (theme) => ({
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    ...theme.mixins.alignment.center,
    background: '#e10351',
    margin: '0 auto'
  },
  icon: {
    color: '#fff'
  }
});
