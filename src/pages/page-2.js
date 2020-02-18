import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import shape from '../images/idea_shape.svg'

const SecondPage = () => (
  <Layout>
    <SEO title='grev - idea' />
    <div className="container-page bg-1  container-padding landing page-2">
      <div className="container is-fullhd">
        <div className="landing__left bg-idea idea-side">
          <div className="header centered">
              <Link to='/'>Go back to the homepage</Link>
              <h1>How idea <br/>brought people <br/>together?</h1>
          </div>
        </div>
        <div className="landing__right centered-flex no-height bg-1">
          
          <div className="video-container">
            <div>1</div>
          </div>
          <div className="video-container">
            <div>1</div>
          </div>
          <div className="video-container">
            <div>1</div>
          </div>
          <div className="video-container">
            <div>1</div>
          </div>
          <div className="video-container">
            <div>1</div>
          </div>
        </div>

      </div>

    </div>
  </Layout>
)

export default SecondPage
