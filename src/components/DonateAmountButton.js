import React from 'react';

class DonateAmountButton extends React.Component {
  render(){
    const{amount, filled} = this.props;
    return(
      <button className={filled ? 'Donation-amount-button-filled' : 'Donation-amount-button'} >
      ${amount}
      </button>
      );
    }
  }
export default DonateAmountButton;
