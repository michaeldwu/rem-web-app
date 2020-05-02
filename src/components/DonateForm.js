import React from 'react';
import DonateAmountButton from './DonateAmountButton.js'

const donation_amts = [10, 20, 50, 'Other'];

class DonateForm extends React.Component {
  
  render(){
    const{charityName, charityDescription} = this.props;
    return(
      <div>
      <div className="Charity-title-wrapper">
        <div className="Charity-header">
          {charityName}
        </div>
        <div className="Charity-subheader">
          {charityDescription}
        </div>
        <hr/>
        {donation_amts.map(function(amount, index){
          return <DonateAmountButton amount={amount} />;
        })}
      </div>
      </div>
      );
    }
  }
export default DonateForm;
