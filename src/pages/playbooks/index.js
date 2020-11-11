// node modules
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// material components
import Button from '@material-ui/core/Button';

// local component
import DialogWrapper from 'components/dialog_wrapper';
import TableWrapper from 'components/table_wrapper';
import PageHeader from 'components/page_header';

// local files
import { getUniqId } from 'common/utils';
import { getTableData, getPageHeaderData } from './__mock';

const Playbooks = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const dialogButtons = [
    <Button key={getUniqId()} autoFocus color="inherit" onClick={handleClose}>
      {t('save')}
    </Button>
  ];

  return (
    <div>
      <PageHeader {...getPageHeaderData(2)} />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <DialogWrapper
        {...{
          title: t('Test'),
          fullScreen: true,
          open,
          handleClose,
          dialogButtons
        }}
      >
        <div>test content</div>
      </DialogWrapper>
      <TableWrapper {...getTableData(7, 30)} />
    </div>
  );
};

export default Playbooks;
