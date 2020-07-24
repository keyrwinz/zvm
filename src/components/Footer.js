import React from 'react';
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'

import logo from '../images/logo2@2x.png'

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
  },
  linkGroup: {
    height: '120px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    textAlign: 'center',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      margin: '20px 0 ',
      // flexDirection: 'column',
      height: 'auto',
    },
  },
  link: {
    padding: 10,
    margin: '0 5px',
    textDecoration: 'none',
    color: '#000',
  },
  copyright: {
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '1px solid rgba(0,0,0, 0.2)',
    color: 'rgba(0,0,0, 0.7)',
  },
  logo: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      position: 'unset',
      margin: '20px 0 10px 0',
    },
    position: 'absolute',
    left: 0,
  },
}));

const Footer = () => {
  const styles = useStyles()
  return (
    <Container className={styles.container}>
      <div className={styles.linkGroup}>
        <a className={styles.link} href="#Features">Features</a>
        <a className={styles.link} href="#AboutUs">About Us</a>
        <a className={styles.link} href="#Services">Services</a>
        <a className={styles.link} href="#Contact">Contact</a>
        <Link href="/" className={styles.logo}>
          <img src={logo} width="100" alt="zivmi logo" />
        </Link>
      </div>
      <div className={styles.copyright}>
        <p>
          ©
          {' '}
          { new Date().getFullYear() }
          {' '}
          Zivmi. All rights reserved
        </p>
      </div>
    </Container>
  )
}

export default Footer
