import React from 'react'
import { Link } from 'gatsby'
import Rellax from 'rellax';

import Layout from '../components/layout'
import SEO from '../components/seo'
// import i1 from '../images/page-3-1.jpg'
// import img1 from '../images/page-2-1.jpg'
import img2 from '../images/page-2-2.jpg'
import img3 from '../images/page-3-4.jpg'
import img4 from '../images/page-3-5.jpg'
import img5 from '../images/page-3-6.jpg'
import play from '../images/audio-play.svg'
import GoBack from '../components/molecules/GoBack';

var rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });

  class Page3 extends React.Component {
    componentDidMount() {
        // We can keep a reference to Rellax in case we need it later
        this.rellax = new Rellax('.rellax', {
            speed: -2,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
          });
      }
    render() {
        return (
  <Layout title="prep">
    <SEO title='grev - idea' />
    <div className="container-page bg-1 landing page-3">
      <div className="container is-fullhd rellax">
        <div className="audio__container intro">
          <div className="audio__container-header rellax" data-rellax-speed="2">
            <GoBack/>
            <h4 className="">Immerse yourself in sound. Visually striking, the
          Pantheone I speaker is as ingenious as it is beautiful,
          filling a space with perfect acoustics whilst simultaneously
          co-existing with its surroundings.</h4>
          <h1>Designed To Be
            Seen & Felt</h1>
          </div>
        </div>
        <div className="audio__container audio__container-row">
            <img src={img2}/>
            <img src={img3}/>
            <img src={img4}/>
            <img src={img5}/>
        </div>
        <div className="audio__container bb rellax" data-rellax-speed="-1">
            <div className="audio__container-player">
                <span><img src={play}/></span>
                <h2 className="rellax" data-rellax-speed="1">making off</h2>
            </div>
        </div>
        <div className="audio__container bb1 rellax" data-rellax-speed="-1">
            <div className="audio__container-player">
                <span><img src={play}/></span>
                <h2 className="rellax" data-rellax-speed="0.5">making off</h2>
            </div>
        </div>

      </div>

    </div>
  </Layout>
        )}  
}

export default Page3
