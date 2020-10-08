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
