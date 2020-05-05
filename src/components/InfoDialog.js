import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';

import CloseIcon from '@material-ui/icons/Close';


// Transition code source: https://material-ui.com/components/dialogs/
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


class InfoDialog extends React.Component {
  render(){
    const{toggleDialog, open} = this.props;
    return(
      <div>
      <Dialog fullScreen  TransitionComponent={Transition} open={open} onClose={toggleDialog} className="Info-dialog">
        <AppBar className="Info-appbar">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={toggleDialog} aria-label="close">
              <CloseIcon />
            </IconButton>
            <DialogTitle>
              FAQ
            </DialogTitle>
          </Toolbar>
        </AppBar>
        <div style={{marginTop: '70px'}}>
        <DialogContent >
          <DialogContentText className="Info-dialog">
          <span>
          {"Thank you for joining us in our journey to transform charitable giving. Below are a few key points that we think it’s important for all our users to know about us and how we operate.\n\n• Here at Rem, we’re firmly against taking any portion or cut of the donation despite ultimately being a for-profit startup. We don’t think it’s ethical to be taking money away from charities and such actions go directly against our core mission. 100% of your donation after credit card fees will go towards supporting the charity of your choice.\n\n• How do we make the donations to charities? At the end of each month, we aggregate the month’s donations for each charity and make a direct deposit into each respective charity’s bank account or mail a physical check to their headquarters depending on available information. This is so that we can avoid unnecessarily losing a portion of your donation towards a second credit card processing fee.\n\n• We recommend that most donations less than $200 be made online through credit card. The portion that credit card companies take for processing is relatively small before that point. Venmo is also a possibility if you’re more comfortable with that. Contact rem’s founder Michael Wu at mdwu@college.harvard.edu if that’s something you’d be interested in.\n\n• If you plan on making a larger donation (say greater than $200), we’d recommend that you bypass the online credit card system to avoid those fees. If this is something you’re considering, contact me through my email listed below and we can work something out (likely a direct bank transfer through Zelle would be easiest).\n\n• How do we choose the charities we recommend? Research. For each prospective charity, we take a deep dive into their programs, proven evidence of effectiveness in their field, and the human impacts/stories they’ve affected. We’re highly selective in the charities we choose to recommend to our users as we understand the gravity of a good donation and the impacts it can have on society.\n\n• Suggestions or feedback for the app? Have a bug or crash to report? Please contact me through my email listed below.\n\n\nSincerely,\nMichael Wu\nCEO and Founder\nmdwu@college.harvard.edu"}
          </span>
          </DialogContentText>
        </DialogContent>
        </div>
      </Dialog>
      </div>
      );
    }
  }
export default InfoDialog;
