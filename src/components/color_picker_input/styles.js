export default (theme) => ({
  wrapper: {
    width: 30,
    height: 20,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1]
  },
  picker: {
    position: 'absolute',
    top: 65,
    right: 0,
    transform: 'translate(50%, 0)',
    zIndex: 1
  },
  colorInputWrapper: {
    width: 400,
    position: 'relative'
  }
});
