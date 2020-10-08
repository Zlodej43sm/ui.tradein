// node modules
import React, { useState } from 'react';

// material components
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

// local component
import THeader from './theader';
import TBody from './tbody';
import TPagination from './tpagination';

// local files
import styles from './styles';

const TableWrapper = ({
  classes: { table: styleTable },
  colNames = [],
  rows = []
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const rowToShow =
    rowsPerPage > 0
      ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : rows;

  return (
    <TableContainer component={Paper}>
      <Table className={styleTable} aria-label="simple table">
        {colNames.length ? <THeader {...{ colNames }} /> : null}
        {rows.length ? <TBody rows={rowToShow} /> : null}
        <TableFooter>
          <TableRow>
            <TPagination
              {...{
                page,
                rows,
                colsCount: colNames.length,
                rowsPerPage,
                handleChangePage,
                handleChangeRowsPerPage
              }}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default withStyles(styles)(TableWrapper);
