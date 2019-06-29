import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from '../components/button'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello Everyone</h1>
      <Button buttonText="Do not Click me" />
    <p>Welcome to my very absurd looking website</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <Link to="/blogs/">Go to Blogs</Link><br/>
      <Link to="/projects/">Go to Projects</Link>
  </Layout>
)

export default IndexPage
