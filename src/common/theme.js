import { createMuiTheme } from '@material-ui/core/styles';

const column = {
  display: 'flex',
  flexDirection: 'column'
};

export const theme = createMuiTheme({
  mixins: {
    alignment: {
      center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
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
