import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import { Blue } from '../theme'

import logo from '../images/logo@2x.png'

const useStyles = makeStyles(() => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    background: '#fff',
    boxShadow: 'none',
    paddingTop: 24,
    paddingBottom: 12,
  },
  logo: {
    flexGrow: 1,
    position: 'relative',
  },
  container: {
    flexWrap: 'wrap',
  },
}));

const Header = () => {
  const styles = useStyles()

  return (
    <AppBar className={styles.appBar}>
      <Container className={styles.container}>
        <Grid container>
          <Grid className={styles.logo}>
            <Link href="/">
              <img src={logo} width="100" alt="zivmi logo" />
            </Link>
          </Grid>
          <Grid>
            <Button
              href="#download"
              style={{
                backgroundColor: Blue,
                color: '#fff',
                fontWeight: '600',
                textTransform: 'none',
              }}
              variant="contained"
            >
              Download
            </Button>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  )
}

export default Header
