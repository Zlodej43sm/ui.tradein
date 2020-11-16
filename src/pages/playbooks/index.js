// node modules
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// material components
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// local component
import DialogWrapper from 'components/dialog_wrapper';
import TableWrapper from 'components/table_wrapper';
import PageHeader from 'components/page_header';
import Input from 'components/input';

// local files
import { getUniqId } from 'common/utils';
import { getTableData, getPageHeaderData } from './__mock';
import styles from './styles';

const Playbooks = ({ classes: { wrapper } }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [inputValue, changeInputValue] = useState('');
  const [numberInputValue, changeNumberInput] = useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onChangeInput = ({ target: { value } }, valid) => {
    // console.log(valid); // validation state depending on validation type
    changeInputValue(value);
  };
  const onChangeNumberInput = ({ target: { value } }, valid) => {
    // console.log(valid); // validation state depending on validation type
    changeNumberInput(value);
  };
  const dialogButtons = [
    <Button key={getUniqId()} autoFocus color="inherit" onClick={handleClose}>
      {t('save')}
    </Button>
  ];

  return (
    <div className={wrapper}>
      <h3>Simple Input</h3>
      <Input value={inputValue} onChange={onChangeInput} />
      <h3>Input type number</h3>
      <Input
        type="number"
        value={numberInputValue}
        onChange={onChangeNumberInput}
      />
      <h3>Page Header</h3>
      <PageHeader {...getPageHeaderData(3)} />
      <h3>Modal Window</h3>
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
      <h3>Table</h3>
      <TableWrapper {...getTableData(7, 30)} />
    </div>
  );
};

export default withStyles(styles)(Playbooks);
