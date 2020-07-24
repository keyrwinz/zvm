import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Yellow } from '../theme'

const Form = styled.form`
  padding: 5rem 0;
  color: #fff;
  text-align: center;

  .heading {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.2rem;
  }
  b {
    color: #fff !important;
    font-size: 2.5rem;
    padding: 1rem 0 2rem;
    display: block;
  }
  p {
    display: block;
    margin-bottom: 4rem;
    max-width: 350px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 537px) {
    .text-field {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .button {
      width: 90%;
      max-width: 350px !important;
      margin: 5px 0 !important;
    }
    b {
      font-size: 30px;
    }
  }
`;

const ContactForm = ({ onSubmit }) => (
  <Form>
    <div className="heading">CONTACT US</div>
    <b>Get In Touch With Us</b>
    <p>
      Contact us immediately and have the opportunity to
      take advantage of special opportunities for you.
    </p>
    <Container>
      <Grid
        className="grid-container"
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <TextField
          className="text-field"
          label="Enter your business email"
          variant="filled"
          InputProps={{
            style: { background: '#fff' },
          }}
          style={{
            width: '90%',
            minWidth: 150,
            maxWidth: 350,
            background: '#fff',
            borderRadius: 10,
          }}
        />
        <Button
          className="button"
          style={{
            textTransform: 'none',
            backgroundColor: Yellow,
            color: '#fff',
            fontWeight: '600',
            padding: '16px 22px',
            marginLeft: '1rem',
            borderRadius: 10,
          }}
          onClick={() => onSubmit()}
        >
          Get Started
        </Button>
      </Grid>
    </Container>
  </Form>
)

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
}

ContactForm.defaultProps = {
  // eslint-disable-next-line no-alert
  onSubmit: () => alert('Submit'),
}

export default ContactForm
