import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  summary: {
    textTransform: 'uppercase',
    color: '#ffad3c',
    fontWeight: 700,
  },
  title: {
    fontSize: '1.7rem',
    fontWeight: 600,
    padding: '0.2rem 0 1rem',
    color: '#212f54',
    [theme.breakpoints.down('xs')]: {
      color: '#ffffff',
    },
  },
  description: {
    color: '#8e8e8e',
    marginBottom: '2rem',
    fontSize: '1rem',
    [theme.breakpoints.down('xs')]: {
      color: '#ffffff',
    },
  },
  button: {
    zIndex: 100,
    color: '#fff',
    fontWeight: '600',
    width: '180px',
    height: '50px',
  },
}));

const HomeFeatureSummary = ({
  summary,
  title,
  description,
  buttonText,
  buttonColor,
  onClick,
}) => {
  const styles = useStyles()

  return (
    <div>
      <div className={styles.summary}>{summary}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <Button
        className={styles.button}
        variant="contained"
        onClick={onClick}
        style={{ backgroundColor: buttonColor }}
      >
        {buttonText}
      </Button>
    </div>
  )
}

HomeFeatureSummary.propTypes = {
  summary: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonColor: PropTypes.string,
  onClick: PropTypes.func,
}

HomeFeatureSummary.defaultProps = {
  summary: null,
  title: null,
  description: null,
  buttonText: null,
  buttonColor: 'primary',
  onClick: () => {},
}

export default HomeFeatureSummary
