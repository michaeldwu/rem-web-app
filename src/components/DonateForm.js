import React from 'react';
import DonateAmountButton from './DonateAmountButton.js'
import DonateButton from './DonateButton.js'

const donation_amts = [10, 20, 50, 'Other'];

class DonateForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      charityAmount: parseInt(this.props.charityAmount),
      charityName: this.props.charityName,
      charityDescription: this.props.charityDescription
    }
    
    this.handleClick = this.handleClick.bind(this);
    this.handleOtherClick = this.handleOtherClick.bind(this);
    this.handleOtherChange = this.handleOtherChange.bind(this);

  }
  
  handleClick(amount){
    this.setState(state => ({
      charityAmount: amount
    }))
  }
  
  handleOtherClick(){
    this.setState(state => ({
      charityAmount: null
    }))
  }
  
  handleOtherChange(event){
    this.setState(state => ({
      charityAmount: event.target.value
    }))
  }
  
  render(){
    return(
      <div>
        <div className="Charity-header">
          {this.state.charityName}
        </div>
        <div className="Charity-subheader">
          {this.state.charityDescription}
        </div>
        <hr/>
        {donation_amts.map(function(amount, index){
          return <DonateAmountButton 
            onClick={Number.isInteger(amount) ? this.handleClick.bind(this, amount) : 
              this.handleOtherClick} 
            amount={Number.isInteger(amount) ? "$" + amount : amount} 
            filled={Number.isInteger(amount) ? 
              this.state.charityAmount == amount : 
              donation_amts.indexOf(parseInt(this.state.charityAmount)) == -1} />;
        }, this)}
        {donation_amts.indexOf(parseInt(this.state.charityAmount)) > -1 ? null :
           <form> 
            <label>
            Amount:   
            <span className="Currency-box">
            $
            <input value={this.state.charityAmount} onChange={event => this.setState({charityAmount: event.target.value.replace(/\D/,'')})}/>
            </span>
            </label> 
           </form>
         }
         <div className="More-info">
         More information about the charity being donated to.
         </div>
         <div className="More-info">
         Information about donations
         </div>
         <DonateButton
          onClick={null}
          enabled={Number.isInteger(this.state.charityAmount)}
         />
      </div>
      );
    }
  }
export default DonateForm;
