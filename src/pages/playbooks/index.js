// node modules
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// material components
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// local component
import DialogWrapper from 'components/wrappers/dialog_wrapper';
import TableWrapper from 'components/wrappers/table_wrapper';
import PageHeader from 'components/page_header';
import Input from 'components/input';
import CheckboxWrapper from 'components/wrappers/checkbox_wrapper';
import RadioWrapper from 'components/wrappers/radio_wrapper';
import StateLabel from 'components/state_label';
import InfoLink from 'components/info_link';
import ColorPickerInput from 'components/color_picker_input';

// local files
import { getUniqId } from 'common/utils';
import { getTableData, getPageHeaderData } from './__mock';
import { colors } from 'components/info_link/utils';
import styles from './styles';

const Playbooks = ({ classes: { wrapper, stateLabel, infoLink } }) => {
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
  const onColorChanged = (color) => {
    console.log(color)
  }
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
      <h3>Color Picker</h3>
      <ColorPickerInput {...{ onColorChanged }} />
      <h3>Info links</h3>
      <div>
        {colors.map((color, i) => (
          <InfoLink
            key={i}
            linkClassName={infoLink}
            to="/playbooks"
            label="Some info"
            count={2500}
            type={color}
          />
        ))}
      </div>
      <h3>State Label component</h3>
      <StateLabel labelClassName={stateLabel} type="new" text="New" />
      <StateLabel labelClassName={stateLabel} type="pending" text="Pending" />
      <StateLabel labelClassName={stateLabel} type="finished" text="Finished" />
      <StateLabel text="Some Info" />
      <h3>Checkbox</h3>
      <CheckboxWrapper label="Control example" />
      <br />
      <CheckboxWrapper checked />
      <h3>Radio Button</h3>
      <RadioWrapper label="Control example" />
      <br />
      <RadioWrapper checked />
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
