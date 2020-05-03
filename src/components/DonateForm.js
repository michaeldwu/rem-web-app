import React from 'react';
import DonateAmountButton from './DonateAmountButton.js'

const donation_amts = [10, 20, 50];

class DonateForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      charityAmount: this.props.charityAmount,
      charityName: this.props.charityName,
      charityDescription: this.props.charityDescription
    }
    
  }

  
  render(){
    return(
      <div>
      <div className="Charity-title-wrapper">
        <div className="Charity-header">
          {this.state.charityName}
        </div>
        <div className="Charity-subheader">
          {this.state.charityDescription}
        </div>
        <hr/>
        {donation_amts.map(function(amount, index){
          return <DonateAmountButton amount={amount} filled={this.state.charityAmount == amount} />;
        }, this)}
      </div>
      </div>
      );
    }
  }
export default DonateForm;
