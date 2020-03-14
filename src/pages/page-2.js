import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
// import shape from '../images/idea_shape.svg'
import i1 from '../images/page-3-1.jpg'
// import arrow from '../images/landing-arrow.svg'
import SubNav from '../components/molecules/SubNav'
import GoBack from '../components/molecules/GoBack'

const SecondPage = () => (
  <Layout title="idea">
    <SEO title='grev - idea' />
    <div className="container-page bg-1  container-padding landing page-2">
      <div className="container is-fullhd">
        <h1 className="tilted-90">IDEA</h1>
        <div className="idea-side">
          <div className="video-container">
              <div className="header">
                <GoBack/>
                

              <h1>How <span className="highlighted">IDEA</span> <br/>brought people <br/>together?</h1>
          </div>
            <iframe src="https://player.vimeo.com/video/395038404" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </div>
          <div className="video-container rellax" data-rellax-speed="2">
            <iframe src="https://player.vimeo.com/video/395038404" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </div>
          <div className="video-container sec-3">
              <img src={i1} className="rellax" data-rellax-speed="-1"/>

              <div className="vid">
                <iframe src="https://player.vimeo.com/video/395038404" width="820" height="460" frameBorder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
              </div>

          </div>
        </div>

      </div>

    </div>
    <SubNav/>
  </Layout>
)

export default SecondPage
