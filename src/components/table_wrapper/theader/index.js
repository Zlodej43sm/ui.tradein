// node modules
import React from 'react';

// material components
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

// local files
import { getUniqId } from 'common/utils';
import styles from './styles';

const THeader = ({ classes: { head }, colNames }) => {
  return (
    <TableHead>
      <TableRow>
        {colNames.map((name, i) => (
          <TableCell
            key={getUniqId()}
            className={head}
            align={i ? 'right' : 'left'}
          >
            {name}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default withStyles(styles)(THeader);
