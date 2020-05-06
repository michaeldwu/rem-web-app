import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import styles from '../styles/classes';

class DonateAmountButton extends React.Component {
  render(){
    const{classes, onClick, amount, filled} = this.props;
    return(
      <Button onClick={onClick} className={filled ? classes.donationAmountButtonFilled : classes.donationAmountButton} >
      {amount}
      </Button>
      );
    }
  }
export default withStyles(styles)(DonateAmountButton);
