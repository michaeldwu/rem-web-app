import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import styles from '../styles/classes';

class DonateButton extends React.Component {
  render(){
    const{classes, onClick, enabled} = this.props;
    return(
      <Button onClick={onClick} className={classes.donationButton} style={ enabled ? {} : { cursor:'not-allowed', opacity: 0.6, pointerEvents: 'none'}}>
      DONATE
      </Button>
      );
    }
  }
export default withStyles(styles)(DonateButton);
