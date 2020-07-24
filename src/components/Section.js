import React from 'react'
import PropTypes from 'prop-types'

const Section = ({ children, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <div {...props}>
    {children}
  </div>
)

Section.propTypes = {
  props: PropTypes.shape(),
  children: PropTypes.node.isRequired,
}

Section.defaultProps = {
  props: {},
}

export default Section;
