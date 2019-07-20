import React from "react"
import styled from "styled-components"
import moment from "moment"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Sidebar, Minion } from "../components"

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>{data.paper.frontmatter.title} | Algonomicon</title>
    </Helmet>
    <Main>
      <Title>{data.paper.frontmatter.title}</Title>
      <p>
        Source:{" "}
        <Link to={data.paper.frontmatter.source}>
          {data.paper.frontmatter.source}
        </Link>
      </p>
      <div dangerouslySetInnerHTML={{ __html: data.paper.html }} />
    </Main>
    <Sidebar>
      <div>
        <Minion>Meta</Minion>
        <Meta>
          <Field>Authors: {data.paper.frontmatter.authors}</Field>
          <Field>
            Created:{" "}
            {moment(data.paper.frontmatter.date).format("MMMM Do, YYYY")}
          </Field>
        </Meta>
      </div>
    </Sidebar>
  </Layout>
)

const Title = styled.h1`
  margin-top: 0;
`

const Meta = styled.div`
  padding: 1rem 0;
`

const Field = styled.p`
  margin: 0;
`

export const query = graphql`
  query($slug: String!) {
    paper: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        authors
        date
        source
      }
    }
  }
`
