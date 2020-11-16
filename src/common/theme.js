import { createMuiTheme } from '@material-ui/core/styles';
import { green, orange, grey, red } from '@material-ui/core/colors';

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
      columnFullCenter: {
        ...column,
        alignCenter: 'center',
        justifyContent: 'center'
      },
      betweenCenter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }
  },
  palette: { green, orange, grey, red }
});
