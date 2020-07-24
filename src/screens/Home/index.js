import React, { useState } from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Slide from '@material-ui/core/Slide'
import Zoom from '@material-ui/core/Zoom'
import Fade from '@material-ui/core/Fade'
import VisibilitySensor from 'react-visibility-sensor'

// assets
import section1img1 from '../../images/IphoneXFont@2x.png'
import section1img2 from '../../images/IphoneXFont2@2x.png'
import section3img from '../../images/IphoneXFont3@2x.png'
import appleStoreImg from '../../images/appStoreBadge@2x.png'
import googlePlayImg from '../../images/googlePlayBadge@2x.png'
import image1 from '../../images/man-wearing-black-zip-up-jacket-near-beach-smiling-at-the-736716@2x.png'
import { Gray, Yellow, DarkBlue } from '../../theme'

// components
import Section from '../../components/Section'
import HomeFeatureSummary from '../../components/HomeFeatureSummary'
import HomeFeatureCard from '../../components/HomeFeatureCard'
import ResponsiveImage from '../../components/ResponsiveImage'
import Testimonials from '../../components/Testimonials'
import ContactForm from '../../components/ContactForm'

const useStyles = makeStyles((theme) => ({
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
}));

const RewardSectionBackground = () => {
  const style = useStyles()
  return (
    <div className={style.rewardSectionBackground} />
  )
}

const PaymentSectionBackground = () => {
  const style = useStyles()
  return (
    <div className={style.paymentSectionBackground} />
  )
}

const Image = () => {
  const styles = useStyles()
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.image} />
    </div>
  )
}

const LandingPage = () => {
  const classes = useStyles()
  const [heroVisibility, setHeroVisibility] = useState(false)
  const [rewardsMobile, showRewardsMobile] = useState(false)
  const [paymentsCard, showPaymentsCard] = useState(false)
  return (
    <StyleContainer>
      <Section id="hero">
        <Container className={classes.hero}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <div className={classes.heroTextContainer}>
                  <Slide direction="right" in timeout={1000}>
                    <div>
                      <Typography className={classes.heroH2} variant="h2">
                        Fast & Secure Money Transfer
                      </Typography>
                    </div>
                  </Slide>
                  <Slide direction="right" in timeout={2000}>
                    <div style={{ marginTop: '20px' }}>
                      <p className="text-gray">
                        With this app in hand, you&apos;ll have more money in your pocket.
                        Because every time you send, spend, or receive money internationally,
                        you&apos;ll pay the lowest possible price.
                      </p>
                    </div>
                  </Slide>
                  <Slide direction="right" in timeout={3000}>
                    <div className={classes.downloadBtnContainer}>
                      <Link href="#appstore">
                        <img className={classes.appStoreImg} src={appleStoreImg} width="150" alt="Download in AppStore" />
                      </Link>
                      <Link href="#googleplay">
                        <img src={googlePlayImg} width="150" alt="Download in GooglePlay" />
                      </Link>
                    </div>
                  </Slide>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <div className={classes.fontImageContainer}>
                  <Fade in timeout={1500}>
                    <div className={classes.section1img1}>
                      <ResponsiveImage
                        image={section1img1}
                        width="50%"
                        style={{ backgroundSize: '200%', height: '100%' }}
                      />
                    </div>
                  </Fade>
                  <Fade in timeout={2000} style={{ transitionDelay: '750ms' }}>
                    <div className={classes.section1img2}>
                      <ResponsiveImage
                        image={section1img2}
                        width="55%"
                        style={{ backgroundSize: '200%', height: '100%' }}
                      />
                    </div>
                  </Fade>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Section>
      <Section id="summary" className={classes.section}>
        <Container>
          <VisibilitySensor
            active={!heroVisibility}
            onChange={(visible) => setHeroVisibility(visible)}
          >
            <div>
              <Typography className={classes.fold2Text} variant="h4">
                The key stuff you&apos;d want to know about app
              </Typography>
            </div>
          </VisibilitySensor>
          <div className={classes.CardContainer}>
            <Zoom in={heroVisibility} style={{ transitionDelay: heroVisibility ? '200ms' : '0ms' }}>
              <div>
                <HomeFeatureCard
                  title="0%"
                  subtitle="No Fee"
                  description="Save when you spend around the World There's No fee. Don't need interuption"
                />
              </div>
            </Zoom>
            <Zoom in={heroVisibility} style={{ transitionDelay: heroVisibility ? '600ms' : '0ms' }}>
              <div>
                <HomeFeatureCard
                  title="5%"
                  subtitle="Zivmi Points"
                  description="Earn hundreds of zivmi points every time you pay. You can use these points in cafes, malls, petrol stations and more"
                />
              </div>
            </Zoom>
            <Zoom in={heroVisibility} style={{ transitionDelay: heroVisibility ? '1000ms' : '0ms' }}>
              <div>
                <HomeFeatureCard
                  title="300K"
                  subtitle="Trusted By"
                  description="So far, we have worked with 300 thoussand customers and all of them continue to use it with pleasure"
                />
              </div>
            </Zoom>
          </div>
        </Container>
      </Section>
      <Section id="rewards" className={classes.section}>
        <Container className={classes.container}>
          <RewardSectionBackground />
          <Grid
            container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={4} sm={4} md={4}>
              <Slide direction="right" in={rewardsMobile} timeout={1000}>
                <div>
                  <ResponsiveImage
                    image={section3img}
                    height="180%"
                    width="90%"
                    style={{ backgroundSize: '200%' }}
                  />
                </div>
              </Slide>
            </Grid>
            <VisibilitySensor
              active={!rewardsMobile}
              onChange={(visible) => showRewardsMobile(visible)}
            >
              <Grid item xs={12} sm={5} md={5}>
                <HomeFeatureSummary
                  summary="Rewards"
                  title="Use Zivmi Points In Over 500 Shops And Malls"
                  description="You can shop from the most famous shops and malls in the world. With the Zivmi application, you can spend your points in more than 500 shops."
                  buttonText="Explore"
                  buttonColor={Yellow}
                />
              </Grid>
            </VisibilitySensor>
          </Grid>
        </Container>
      </Section>
      <Section id="payments" className={classes.section}>
        <Container className={classes.container}>
          <PaymentSectionBackground />
          <Grid
            container
            spacing={10}
            direction="row"
            justify="center"
            alignItems="center"
            wrap="wrap-reverse"
          >
            <Grid item xs={12} sm={4} md={4} className={classes.PaymentsFeature}>
              <VisibilitySensor
                active={!paymentsCard}
                onChange={(visible) => showPaymentsCard(visible)}
              >
                <HomeFeatureSummary
                  summary="Payments"
                  title="Pay Like A Local - Get The Real Exchange Rate"
                  description="Spend abroad in over 150 currencies at the Real (Interbank) exchange rates - with no hidden fees. All payments will be instantly transferred to the account of the person you want within seconds."
                  buttonText="Get Started"
                  buttonColor={DarkBlue}
                />
              </VisibilitySensor>
            </Grid>
            <Grid item xs={12} sm={5} md={5} className={classes.PaymentsCardGrid}>
              <Zoom in={paymentsCard} timeout={700}>
                <Paper className={classes.PaymentsCard} elevation={8}>
                  <Image />
                  <small className={classes.sendMoneyText}>
                    <strong>Send money to John</strong>
                  </small>
                  <div className="text-container">
                    <div>
                      <p className="text-gray">You send</p>
                      <p><b>$250</b></p>
                    </div>
                    <div>
                      <strong>USD</strong>
                    </div>
                  </div>
                  <Divider className="divider" />
                  <div className="text-container">
                    <div>
                      <p className="text-gray">Johny gets</p>
                      <p><b>$3.937.38</b></p>
                    </div>
                    <div>
                      <strong>
                        <span role="img" aria-label="egypt flag">🇪🇬</span>
                        EGP
                      </strong>
                    </div>
                  </div>
                </Paper>
              </Zoom>
            </Grid>
          </Grid>
        </Container>
      </Section>
      <Section id="testimonials" className={classes.section}>
        <Container className={classes.container}>
          <Testimonials />
        </Container>
      </Section>
      <Section id="contact" className={classes.contactSection}>
        <Container className={classes.container}>
          <ContactForm />
        </Container>
      </Section>
    </StyleContainer>
  )
}

const StyleContainer = styled.div`
  .text-container {
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .divider {
    width: 70%;
    margin: 10px 0;
  }
  .text-gray {
    color: ${Gray};
  }
  b {
    color: ${DarkBlue};
  }
`

export default LandingPage
