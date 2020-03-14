/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import footerImg from '../images/sh.svg'

import Header from './header'
import ChildrenWrapper from './childrenWrapper'
import './layout.css'

const Layout = ({ children, title }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log(data,title, '<title')

  return (
    <div className={`home ${title}`}>
      <Header siteTitle={data.site.siteMetadata.title} />
        <ChildrenWrapper children = {children}>
          {children}
        </ChildrenWrapper>
        <footer>
        <img src={footerImg}/>
        <h2 className="f-f">grev</h2>
        <h3 className="f-f">Thi movie is a friends collaborative project.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </h3>
        <div>
          <hr/>
        <h4>Contact</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
