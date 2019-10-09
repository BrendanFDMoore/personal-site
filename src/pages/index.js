import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Unnamed Brendan Site "

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0, width:'33%' }} src="./undraw_master_plan_95wa.svg" alt="Gatsby Scene" />
        <h1>
          Hi!{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>This is the MVP of my new personal site.</p>
        <p>
          I was bike-shedding myself into inaction, so I decided to just get this online with minimal changes. 
          It's not "done" and never will be, but at least it's here now.
        </p>
        <p>Now I can add stuff incrementally and not be blocked!</p>
        <Link to="/blog/">
          <Button marginTop="35px">👉{" "}Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
