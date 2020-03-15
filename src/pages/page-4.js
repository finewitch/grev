import React from 'react'
import { Link } from 'gatsby'
import Rellax from 'rellax';

import Layout from '../components/layout'
import SEO from '../components/seo'
import gif1 from '../images/page-3-4.gif'
import img1 from '../images/page-4-1.jpg'
// import play from '../images/audio-play.svg'

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
        const mainImg = document.getElementById('main')
        window.addEventListener('scroll', function() {
          mainImg.style.transform = 'translate3d(0, -'+(window.scrollY/100)+'%, 0) scale('+(1.3 -  this.scrollY/4000)+')'
  //         $(".zoom img").css({
  //           transform: 'translate3d(-50%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/5)/100+')',
  // });
        })
    }
    render() {
        return (
  <Layout title="emo">
    <SEO title='grev - idea' />
      <div className="layer1" id="main">
        {/* <img src={img1} className="main" /> */}
       
      </div>
      <div className="box-f_1">
      <h1 className="f-f f-w">As synonymous with Melbourne as Hosier Lane’s graffiti, we’ve been around since 2002
Visit our three iconic spots along Hosier Lane or hop across town to the bright and buzzy MoVida Aqui</h1>
      </div>
    <div className="container-page bg-1  container-padding landing page-4">
        <div className="container is-fullhd">
            </div>
            {/* <div className="box-f_2">
                <img src={gif1} className="img-1"/>
                <img src={gif2} className="img-2"/>
            </div> */}
        {/* </div> */}

      </div>
  </Layout>
        )}  
}

export default Page3
