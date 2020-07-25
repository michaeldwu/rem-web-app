import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// Custom Components
import bg from './resources/bg_blur.jpg';
import logo from './resources/rem_logo.png';
import { SocialIcon } from 'react-social-icons';

const styles = theme => ({
  root: {
    height: '100vh',
    width: '100%',
    backgroundFilter: 'blur(1000px)',
    backgroundImage: "url("+bg+")",
    backgroundSize: 'cover'
  },
  main: {
    paddingBottom: '180px',
  },
  social: {
    display: 'flex',  
    justifyContent:'center', 
    alignItems:'center',
  },
  title: {
    display: 'flex',  
    justifyContent:'center', 
    alignItems:'center',
    paddingTop: '40px',
    fontFamily: 'Lato',
    fontWeight: '700',
    fontSize: 40,
    color: 'white'
  },
  logo: {
    width: '50px',
    paddingRight: '10px'
  },
  message: {
    display: 'flex',  
    justifyContent:'center', 
    alignItems:'center',
    paddingTop: '200px',
    fontFamily: 'Lato',
    fontSize: 60,
    color: 'white',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
    },
  },
  copyRight: {
    display: 'flex',  
    justifyContent:'center', 
    alignItems:'center',
    fontSize: 10,
    color: 'white'
  }
});

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>

        <div className={classes.main}>
          <div className={classes.title}>
            <img src={logo} className={classes.logo} alt="logo" />
            rem
          </div>

          <div className={classes.message}>
            Launching August 24th
          </div>
        </div>
        <hr style={{width:'80%'}}/>

        <div className={classes.social}>
          <SocialIcon bgColor='white' url="https://www.instagram.com/rem.fyc" style={{margin: '30px'}}/>
          <SocialIcon bgColor='white' url="https://www.youtube.com/channel/UCglok9Hll2SF2PsDfqVCkzA" style={{margin: '30px'}} />
        </div>

        <div className={classes.copyRight}>
          Copyright © 2020 rem - All Rights Reserved.
        </div>

    </div>
  );
}

export default withStyles(styles)(App);
