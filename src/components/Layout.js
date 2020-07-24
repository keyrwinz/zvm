import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <div style={{ overflow: 'hidden', backgroundColor: '#fff' }}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
