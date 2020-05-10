import * as RemColors from '../resources/palette'

const styles = theme => ({
  buttonBox: {
    marginTop: 20
  },
  charityHeader:{
    color: RemColors.black['b1'],
    fontSize: 'calc(18px + 2vmin)',
    fontWeight: '400'
  },
  charitySubheader:{
    color: RemColors.gray['g2'],
    fontSize: 'calc(10px + 1vmin)',
    fontWeight: '400',
    marginTop: 10
  },
  currencyBox: {
    display: 'inline-block',
    marginLeft: 10
  },
  donateDescription: {
    color: RemColors.gray['g2'],
    fontSize: 'calc(10px + 0.5vmin)',
    fontWeight: '400',
    marginTop: 10
  },
  donationButton: {
    backgroundColor: RemColors.green['g1'],
    borderRadius: 8,
    color: 'white',
    width: 300,
    height: 42,
    fontSize: 18,
    marginTop: 40,
    fontWeight: '400',
    '&:hover': {
      backgroundColor: RemColors.green['g1']
    }
  },
  donationAmountButton: {
    border: '1.5px solid',
    borderColor: RemColors.gray['g2'],
    backgroundColor: 'white',
    color: RemColors.gray['g2'],
    width: 80,
    height: 50,
    fontSize: 18,
    margin: 5,
    borderRadius: 0,
    fontWeight: 'normal',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'white'
    }
  },
  donationAmountButtonFilled: {
    border: '1.5px solid',
    borderColor: RemColors.gray['g2'],
    backgroundColor: RemColors.gray['g2'],
    color: 'white',
    width: 80,
    height: 50,
    fontSize: 18,
    margin: 5,
    fontWeight: 'normal',
    textTransform: 'none',
    borderRadius: 0,
    '&:hover': {
      backgroundColor: RemColors.gray['g2']
    }
  },
  infoHeader: {
    marginTop: 20,
    marginBottom: 14,
    fontSize: 28
  },
  infoAppbar: {
    position: 'sticky',
    backgroundColor: RemColors.white['w2'],
    color: RemColors.black['b2'],
  },
  infoDialog: {
    color: RemColors.white['b2'],
    fontSize: 'calc(12px + 0.5vmin)',
    whiteSpace: 'pre-line'
  },
  moreInfo: {
    color: RemColors.gray['g2'],
    fontSize: 'calc(10px + 0.5vmin)',
    fontWeight: '400',
    marginTop: 10,
    cursor: 'pointer',
    textDecoration: 'underline',
    fontFamily: 'inherit'
  },
  valueInput: {
    width: 140,
    height: 30,
    outline: 'none',
    borderLeft: 0,
    borderRight: 0,
    borderTop: 0,
    borderBottomColor: '#929495',
    marginLeft: 2,
    fontFamily:'inherit',
    fontWeight: '400',
    fontSize: 18,
    color: RemColors.gray['g2']
  }

});
export default styles;