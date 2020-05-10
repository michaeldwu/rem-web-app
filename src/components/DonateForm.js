import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import DonateAmountButton from './DonateAmountButton.js';
import DonateButton from './DonateButton.js';
import InfoDialog from './InfoDialog.js';

import styles from '../styles/classes';

const donation_amts = [10, 20, 50, 'Other'];

class DonateForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      charityAmount: parseInt(this.props.charityAmount),
      charityName: this.props.charityName,
      charityDescription: this.props.charityDescription,
      selected: [false, false, false, false],
      popupOpen: false
    }
    
    for(var i = 0; i < this.state.selected.length; i++){
      if(this.state.charityAmount === donation_amts[i]){
        this.state.selected[i] = true;
      }
    }
    if(this.state.selected.every(v => v === false)){
      this.state.selected[this.state.selected.length - 1] = true
    }
    
    this.handleClick = this.handleClick.bind(this);
    this.handleOtherClick = this.handleOtherClick.bind(this);
    this.infoToggle = this.infoToggle.bind(this);
  }
  
  handleClick(amount, index){
    this.setState(state => ({
      charityAmount: amount
    }))
    for(var i = 0; i < this.state.selected.length; i++){
      if(i === index){
        this.state.selected[i] = true
      }
      else{
        this.state.selected[i] = false
      }
    }
  }
  
  handleOtherClick(){
    this.setState(state => ({
      charityAmount: null
    }))
  }

  infoToggle(){
    this.setState(state => ({
      popupOpen: !this.state.popupOpen
    }))
  }
  
  render(){
    const { classes } = this.props;
    return(
      <div>
        <div className={classes.charityHeader}>
          {this.state.charityName}
        </div>
        <div className={classes.charitySubheader}>
          {this.state.charityDescription}
        </div>
        <hr/>
        <div className={classes.buttonBox}>
        {donation_amts.map(function(amount, index){
          return <DonateAmountButton 
            onClick={Number.isInteger(amount) ? this.handleClick.bind(this, amount, index) : 
              this.handleClick.bind(this, null, index)} 
            amount={Number.isInteger(amount) ? "$" + amount : amount} 
            filled={this.state.selected[index]}
              />;
        }, this)}
        {!this.state.selected[this.state.selected.length - 1] ? null :
           <form> 
            <label >
            Amount:   
            <span className={classes.currencyBox}>
            $
            <input className={classes.valueInput} value={this.state.charityAmount} onChange={event => this.setState({charityAmount: event.target.value.replace(/\D/,'')})}/>
            </span>
            </label> 
           </form>
         }
         </div>
         <div className={classes.donateDescription}>
         More information about the charity being donated to.
         </div>
         
         <DonateButton
          onClick={null}
          enabled={this.state.charityAmount}
         />
         <a>
           <div className={classes.moreInfo} onClick={this.infoToggle}>
           Click here for donation FAQs.
           </div>
         </a>
         <InfoDialog  toggleDialog={this.infoToggle} open={this.state.popupOpen}/>
      </div>
      );
    }
  }
export default withStyles(styles)(DonateForm);
