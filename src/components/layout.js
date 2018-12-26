import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Navbar from '../components/Global/Navbar'
import { ProductProvider } from './context'
// import '../styles/sass/layout.scss'

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          properties: allContentfulProperties {
            edges {
              node {
                id
                description {
                  description
                }
                neighborhood {
                  neighborhood
                }
                features {
                  content
                }
                images {
                  fluid(maxWidth: 300) {
                    src
                  }
                }
                title
                address
                type
                price
                bedrooms
                bathrooms
                garages
                city
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <React.Fragment>
            <GlobalStyle />
            <Navbar />
            <ProductProvider data={data}>{children}</ProductProvider>
          </React.Fragment>
        )
      }}
    />
  )
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Open Sans', sans-serif;
  color:#262626;
  background:#fff;
}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
