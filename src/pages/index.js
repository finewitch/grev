import React from 'react'
// import { Link } from 'gatsby'
import Landing from '../components/organisms/Landing'
import Section1 from '../components/organisms/Section1'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout title="landing-page">
    <SEO title='Home' />
    <Landing/>
    <Section1/>
  </Layout>
)

export default IndexPage
