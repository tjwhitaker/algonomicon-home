import React from "react"
import styled from "styled-components"
import moment from "moment"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Sidebar, Minion } from "../components"

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>{data.algorithm.frontmatter.title} | Algonomicon</title>
    </Helmet>
    <Main>
      <Title>{data.algorithm.frontmatter.title}</Title>
      <div dangerouslySetInnerHTML={{ __html: data.algorithm.html }} />
    </Main>
    <Sidebar>
      <div>
        <Minion>Meta</Minion>
        <Meta>
          <Field>
            Created:{" "}
            {moment(data.algorithm.frontmatter.date).format("MMMM Do, YYYY")}
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
    algorithm: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
