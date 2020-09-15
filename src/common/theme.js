import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  mixins: {
    alignment: {
      center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      column: {
        display: 'flex',
        flexDirection: 'column'
      },
      betweenCenter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }
  }
});
