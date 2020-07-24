import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Grow from '@material-ui/core/Grow'
import VisibilitySensor from 'react-visibility-sensor'

import image1 from '../images/photo-of-woman-wearing-black-top-2772091@2x.png'
import image2 from '../images/smiling-woman-wearing-black-sweater-1587009@2x.png'
import image3 from '../images/photography-of-a-guy-wearing-green-shirt-1222271@2x.png'
import image4 from '../images/man-wearing-black-zip-up-jacket-near-beach-smiling-at-the-736716@2x.png'
import image5 from '../images/a-woman-posing-in-a-casual-wear-2880374@2x.png'

const testimonials = [{
  image: image1,
  text: 'I can send money instantly whenever I want. I earn points when I send money.',
  name: 'Mikasa Ackerman',
}, {
  image: image2,
  text: 'I can send money instantly whenever I want. I earn points when I send money.',
  name: 'Sakura Haruno',
}, {
  image: image3,
  text: 'I can send money instantly whenever I want. I earn points when I send money.',
  name: 'Johny Mellow',
}, {
  image: image4,
  text: 'I can send money instantly whenever I want. I earn points when I send money.',
  name: 'Naruto Uzumaki',
}, {
  image: image5,
  text: 'I can send money instantly whenever I want. I earn points when I send money.',
  name: 'Hinata Hyuga',
}]

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '15%',
    marginBottom: '10%',
  },
  TestimonialGrid: {
    [theme.breakpoints.down('sm')]: {
      pading: '20px !important',
    },
  },
  heading: {
    color: '#ffad3c',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 4,
    textAlign: 'center',
    marginBottom: '0.5rem',
    [theme.breakpoints.down('xs')]: {
      marginTop: '150px',
    },
  },
  title: {
    color: '#212f54',
    padding: '0.2rem 0 1rem',
    fontSize: '1.5rem',
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: '2rem',
  },
  imageWrapper: {
    width: '10vw',
    height: '10vw',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto 10px auto',
    },
  },
  image: {
    position: 'absolute',
    width: '8vw',
    height: '8vw',
    borderRadius: '100%',
    transition: 'all 0.2s ease-in-out',
    backgroundColor: '#eee',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    '&:hover': {
      marginLeft: '-1vw',
      marginTop: '-1vw',
      width: '10vw',
      height: '10vw',
    },
    [theme.breakpoints.down('xs')]: {
      width: '10vw',
      height: '10vw',
    },
  },
}));

const Testimonial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .testimonial-text {
    opacity: 0;
    transition: all 0.2s ease-in-out;
    text-align: center;
    width: 100%;
    margin-left: -2vw;
    p {
      opacity: 0.6;
      margin-bottom: 0.75rem;
      line-height: 1.25em;
    }
  }
  &:hover .testimonial-text {
    opacity: 1;
  }

  @media (max-width: 599px) {
    .testimonial-text {
      opacity: 1;
      margin-bottom: 30px;
    }
  }
`;

const Image = ({ style }) => {
  const styles = useStyles()
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.image} style={style} />
    </div>
  )
}

const TestimonialText = ({ text, name }) => (
  <div className="testimonial-text">
    <p>{text}</p>
    <b>{name}</b>
  </div>
)

const Testimonials = () => {
  const styles = useStyles()
  const [isView, showAvatars] = useState(false)
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Testimonial</div>
      <VisibilitySensor
        active={!isView}
        onChange={(visible) => showAvatars(visible)}
      >
        <div className={styles.title}>What People Say About Us</div>
      </VisibilitySensor>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {testimonials.map(({ image, text, name }, idx) => (
          <Grow
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            in={isView}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...(isView ? { timeout: (idx + 1) * 500 } : {})}
          >
            <Grid className={styles.TestimonialGrid} sm={6} md={2}>
              <Testimonial>
                <Image style={{ backgroundImage: `url(${image})` }} />
                <TestimonialText text={text} name={name} />
              </Testimonial>
            </Grid>
          </Grow>
        ))}
      </Grid>
    </div>
  )
}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(PropTypes.object),
}

Testimonials.defaultProps = {
  testimonials,
}

Image.propTypes = {
  style: PropTypes.shape(),
}

Image.defaultProps = {
  style: {},
}

TestimonialText.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
export default Testimonials
