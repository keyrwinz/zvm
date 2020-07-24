import React from 'react'
import PropTypes from 'prop-types'

const ResponsiveImage = ({
  image,
  style,
  width,
  height,
}) => (
  <div
    style={{
      width,
      paddingBottom: height,
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      ...style,
    }}
  />
)

ResponsiveImage.propTypes = {
  image: PropTypes.string,
  style: PropTypes.shape(),
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
}

ResponsiveImage.defaultProps = {
  image: null,
  style: {},
}

export default ResponsiveImage
