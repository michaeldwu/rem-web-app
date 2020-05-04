import React from 'react';

class DonateButton extends React.Component {
  render(){
    const{onClick, enabled} = this.props;
    return(
      <button onClick={onClick} className="Donation-button" style={ enabled ? {} : { cursor:'not-allowed', opacity: 0.6}}>
      DONATE
      </button>
      );
    }
  }
export default DonateButton;
