import React from 'react';

class DonateAmountButton extends React.Component {
  render(){
    const{amount} = this.props;
    return(
      <button className="Donation-amount-button">
      ${amount}
      </button>
      );
    }
  }
export default DonateAmountButton;
