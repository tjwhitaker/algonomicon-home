import React from "react"
import styled from "styled-components"
import moment from "moment"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Sidebar, Minion } from "../components"

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>{data.dataset.frontmatter.title} | Algonomicon</title>
    </Helmet>
    <Main>
      <Title>{data.dataset.frontmatter.title}</Title>
      <div dangerouslySetInnerHTML={{ __html: data.dataset.html }} />
    </Main>
    <Sidebar>
      <div>
        <Minion>Meta</Minion>
        <Meta>
          <Field>Author: {data.dataset.frontmatter.authors}</Field>
          <Field>
            Created:{" "}
            {moment(data.dataset.frontmatter.date).format("MMMM Do, YYYY")}
          </Field>
        </Meta>
      </div>
      <div>
        <Minion>Outline</Minion>
        <Outline
          dangerouslySetInnerHTML={{ __html: data.dataset.frontmatter.outline }}
        />
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

const Outline = styled.div`
  padding: 1rem 0;

  ul {
    list-style: inside;
    margin-left: 0;

    ul {
      list-style: inside circle;
      margin-left: 1.625rem;
      margin-top: 0;
    }
  }
`

export const query = graphql`
  query($slug: String!) {
    dataset: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        authors
        date
        outline
      }
    }
  }
`
