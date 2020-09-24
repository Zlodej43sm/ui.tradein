import { createMuiTheme } from '@material-ui/core/styles';

const column = { display: 'flex', flexDirection: 'column' };
const alignCenter = { display: 'flex', alignItems: 'center' };

export const theme = createMuiTheme({
  mixins: {
    alignment: {
      center: {
        ...alignCenter,
        justifyContent: 'center'
      },
      alignCenter,
      column,
      columnCenter: {
        ...column,
        alignItems: 'center'
      },
      betweenCenter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }
  }
});
