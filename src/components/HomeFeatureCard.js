import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Blue, LightBlue } from '../theme'

const useStyles = makeStyles(() => ({
  card: {
    height: '250px',
    width: '300px',
    padding: 20,
    cursor: 'pointer',
  },
  title: {
    textAlign: 'center',
    fontSize: '60px',
    fontWeight: '600',
    color: Blue,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '20px',
    marginBottom: '10px',
  },
  description: {
    textAlign: 'center',
    color: LightBlue,
  },
}));

const HomeFeatureCard = (props) => {
  const classes = useStyles()
  const [elevation, setElevation] = useState(0)
  const { title, subtitle, description } = props

  return (
    <Paper
      className={classes.card}
      elevation={elevation}
      onMouseEnter={() => setElevation(5)}
      onMouseLeave={() => setElevation(0)}
    >
      <div className={classes.title}>
        {title}
      </div>
      <div className={classes.subtitle}>
        {subtitle}
      </div>
      <div className={classes.description}>
        {description}
      </div>
    </Paper>
  )
}

HomeFeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default HomeFeatureCard
