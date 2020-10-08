// node modules
import React from 'react';

// material components
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

// local component
import THeader from './theader';
import TBody from './tbody';

// local files
import styles from './styles';

const TableWrapper = ({
  classes: { table: styleTable },
  colNames = [],
  rows = []
}) => {
  return (
    <TableContainer component={Paper}>
      <Table className={styleTable} aria-label="simple table">
        {colNames.length ? <THeader {...{ colNames }} /> : null}
        {rows.length ? <TBody {...{ rows }} /> : null}
      </Table>
    </TableContainer>
  );
};

export default withStyles(styles)(TableWrapper);
