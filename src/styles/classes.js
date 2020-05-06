import * as RemColors from '../resources/palette'

const styles = theme => ({
  buttonBox: {
    marginTop: 20
  },
  charityHeader:{
    color: RemColors.black['b1'],
    fontSize: 'calc(18px + 2vmin)',
    fontWeight: 'bold'
  },
  charitySubheader:{
    color: RemColors.gray['g2'],
    fontSize: 'calc(10px + 1vmin)',
    fontWeight: 'bold',
    marginTop: 10
  },
  currencyBox: {
    display: 'inline-block',
    marginLeft: 10
  },
  donateDescription: {
    color: RemColors.gray['g2'],
    fontSize: 'calc(10px + 0.5vmin)',
    fontWeight: 'bold',
    marginTop: 10
  },
  donationButton: {
    backgroundColor: RemColors.green['g1'],
    borderRadius: 12,
    color: 'white',
    width: 200,
    height: 50,
    fontSize: 18,
    marginTop: 40,
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: RemColors.green['g1']
    }
  },
  donationAmountButton: {
    border: '2px solid',
    borderColor: RemColors.gray['g2'],
    backgroundColor: 'white',
    color: RemColors.gray['g2'],
    width: 80,
    height: 50,
    fontSize: 18,
    margin: 10,
    borderRadius: 0,
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: 'white'
    }
  },
  donationAmountButtonFilled: {
    border: '2px solid',
    borderColor: RemColors.gray['g2'],
    backgroundColor: RemColors.gray['g2'],
    color: 'white',
    width: 80,
    height: 50,
    fontSize: 18,
    margin: 10,
    fontWeight: 'bold',
    borderRadius: 0,
    '&:hover': {
      backgroundColor: RemColors.gray['g2']
    }
  },
  infoAppbar: {
    position: 'sticky',
    backgroundColor: RemColors.orange['o1']
  },
  infoDialog: {
    color: RemColors.gray['g2'],
    fontSize: 'calc(12px + 0.5vmin)',
    whiteSpace: 'pre-line'
  },
  moreInfo: {
    color: RemColors.gray['g1'],
    fontSize: 'calc(10px + 0.5vmin)',
    fontWeight: 'bold',
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
    fontWeight: 'bold',
    fontSize: 18,
    color: RemColors.gray['g2']
  }

});
export default styles;