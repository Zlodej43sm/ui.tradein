// node modules
import React from 'react';
import PropTypes from 'prop-types';

// material component
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// local files
import { getUniqId } from 'common/utils';
import styles from './styles';

const propTypes = {
  title: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      onClick: PropTypes.func,
      icon: PropTypes.node
    })
  )
};

const PageHeader = ({
  classes: { paper, buttonRoot, headerTitle },
  title,
  buttons
}) => {
  return (
    <Paper classes={{ root: paper }} elevation={3}>
      <span className={headerTitle}>{title}</span>
      <div>
        {buttons.map(({ onClick, title, icon }) => (
          <Button
            classes={{ root: buttonRoot }}
            variant="contained"
            color="primary"
            key={getUniqId()}
            onClick={onClick}
          >
            {icon}
            {title}
          </Button>
        ))}
      </div>
    </Paper>
  );
};

PageHeader.propTypes = propTypes;

export default withStyles(styles)(PageHeader);
