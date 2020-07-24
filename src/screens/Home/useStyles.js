import { makeStyles } from '@material-ui/core/styles'
import image1 from '../../images/man-wearing-black-zip-up-jacket-near-beach-smiling-at-the-736716@2x.png'
import { Gray } from '../../theme'

export default makeStyles((theme) => ({
  hero: {
    flexGrow: 1,
    minHeight: '100vh',
    paddingTop: '80px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    height: '100%',
  },
  heroTextContainer: {
    marginTop: '80px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: '0px',
    },
  },
  heroH2: {
    fontWeight: '600',
    [theme.breakpoints.down('sm')]: {
      marginTop: '40px',
      fontSize: '30px',
    },
  },
  fold2Text: {
    maxWidth: '400px',
    textAlign: 'center',
    margin: '0 auto',
    fontWeight: '600',
    [theme.breakpoints.down('sm')]: {
      fontSize: '26px',
    },
  },
  fontImageContainer: {
    height: '600px',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      height: '90vw',
      // marginBottom: '100px',
    },
  },
  section1img1: {
    position: 'absolute',
    height: '100%',
    top: '50px',
    left: '0px',
    bottom: '0px',
    right: '0px',
    zIndex: 20,
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      transform: 'translate(15%, -10%)',
    },
  },
  section1img2: {
    position: 'absolute',
    height: '100%',
    top: '50px',
    left: '0px',
    bottom: '0px',
    right: '0px',
    zIndex: 10,
    transform: 'translate(30%, 0px)',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      transform: 'translate(45%, -10%)',
    },
  },
  downloadBtnContainer: {
    marginTop: 50,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    },
  },
  appStoreImg: {
    marginRight: 20,
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
    },
  },
  section: {
    position: 'relative',
  },
  contactSection: {
    position: 'relative',
    backgroundColor: '#1289ff',
  },
  container: {
    position: 'relative',
    zIndex: 10,
  },
  CardContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '150px',
    '& > *': {
      margin: theme.spacing(4),
      [theme.breakpoints.down('xs')]: {
        margin: theme.spacing(1),
      },
    },
  },
  rewardSectionBackground: {
    background: '#1289ff',
    position: 'absolute',
    borderRadius: '10%',
    top: '50%',
    marginTop: '-25vw',
    marginLeft: '-28vw',
    height: '50vw',
    width: '50vw',
    zIndex: -10,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '110%',
      left: '0px',
      top: '0px',
      marginTop: '0px',
      marginLeft: '0px',
      borderRadius: '0px',
    },
  },
  imageWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '10vw',
    height: '10vw',
    [theme.breakpoints.down('xs')]: {
      height: '15vw',
      width: '15vw',
    },
  },
  image: {
    backgroundImage: `url(${image1})`,
    width: '8vw',
    height: '8vw',
    borderRadius: '100%',
    transition: 'all 0.2s ease-in-out',
    backgroundColor: '#eee',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('xs')]: {
      height: '15vw',
      width: '15vw',
    },
  },
  paymentSectionBackground: {
    background: '#1289ff',
    position: 'absolute',
    borderRadius: '100%',
    top: '50%',
    marginTop: '-15vw',
    right: '0',
    marginRight: '-5vw',
    height: '40vw',
    width: '40vw',
    zIndex: -10,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '75%',
      left: '0px',
      top: '26%',
      marginTop: '0px',
      marginLeft: '0px',
      borderRadius: '0px',
    },
  },
  PaymentsFeature: {
    marginTop: '200px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '0px',
    },
  },
  PaymentsCardGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      transform: 'translate(0px, 70px)',
    },
  },
  PaymentsCard: {
    marginTop: 200,
    width: '300px',
    padding: '30px 0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '50px',
    },
  },
  sendMoneyText: {
    color: Gray,
    marginBottom: '12%',
    [theme.breakpoints.down('xs')]: {
      marginTop: '8%',
    },
  },
}))
