// Step 1: Import React
import * as React from 'react'
import Layout from '../compontents/layout'
import Seo from '../compontents/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this sie, which I built with gatsby.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage