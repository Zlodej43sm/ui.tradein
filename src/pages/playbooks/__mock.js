import React from 'react';

// material components
import AddIcon from '@material-ui/icons/Add';

/* eslint-disable */
export const getTableData = (colsCount, rowsCount) => {
  let row = [];
  const tableData = {
    colNames: [],
    rows: []
  };
  while (colsCount > 0) {
    tableData.colNames.push(`Title ${colsCount}`);
    row.push(`value ${colsCount}`);
    --colsCount;
  }
  while (rowsCount > 0) {
    const newRow = [...row].map((r) => (r += rowsCount));
    tableData.rows.push(newRow);
    --rowsCount;
  }
  return tableData;
};

export const getPageHeaderData = (count = 1) => {
  const defaultButton = {
    type: "primary",
    title: "New products",
    icon: <AddIcon />,
    onClick: () => console.log('click header btn')
  }

  return {
      title: "Products",
      buttons: new Array(count).fill(defaultButton)
    }
}
