// node modules
import React from 'react';

// material components
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

// local files
import { getUniqId } from 'common/utils';
import styles from './styles';

const TBody = ({ classes: { rowRoot }, rows }) => {
  return (
    <TableBody>
      {rows.map((row) => (
        <TableRow key={getUniqId()} hover className={rowRoot}>
          {row.map((name, i) => (
            <TableCell key={getUniqId()} align={i ? 'right' : 'left'}>
              {name}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default withStyles(styles)(TBody);
