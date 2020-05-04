import React from 'react';

class DonateAmountButton extends React.Component {
  render(){
    const{onClick, amount, filled} = this.props;
    return(
      <button onClick={onClick} className={filled ? 'Donation-amount-button-filled' : 'Donation-amount-button'} >
      {amount}
      </button>
      );
    }
  }
export default DonateAmountButton;
