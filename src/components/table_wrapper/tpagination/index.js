// node modules
import React from 'react';
import { useTranslation } from 'react-i18next';

// material components
import TablePagination from '@material-ui/core/TablePagination';
import { withStyles } from '@material-ui/core/styles';

// local files
import TablePaginationActions from './tpagination_actions';
import styles from './styles';

const TPagination = ({
  page,
  rows,
  colsCount,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage
}) => {
  const { t } = useTranslation();
  return (
    <TablePagination
      labelDisplayedRows={({ from, to, count }) =>
        `${from} - ${to} ${t('of')} ${count}`
      }
      labelRowsPerPage={t('Rows per page:')}
      rowsPerPageOptions={[5, 10, 25, { label: t('All'), value: -1 }]}
      colSpan={colsCount}
      count={rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      SelectProps={{
        inputProps: { 'aria-label': 'rows per page' },
        native: true
      }}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      ActionsComponent={TablePaginationActions}
    />
  );
};

export default withStyles(styles)(TPagination);
