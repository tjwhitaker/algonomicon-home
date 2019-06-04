import React from "react"
import styled from "styled-components"
import moment from "moment"
import Minion from "./minion"
import { Link, graphql } from "gatsby"

const Container = styled.div`
  max-height: 100%;
  margin-right: -50px;
  padding-right: 42px;
  overflow: scroll;
  position: absolute;
`

const Post = styled(Link)`
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
  display: block;
`

const Title = styled.h4`
  color: hsla(0, 0%, 0%, 0.8);
  margin: 0;
  line-height: 1.625;
`

const Description = styled.p`
  color: hsla(0, 0%, 0%, 0.8);
  margin-bottom: 0;
  font-weight: normal;
`

const Meta = styled.small`
  color: #aaa;
  font-weight: normal;
`

const Algorithm = ({ data }) => (
  <Post to={`/algorithms/${data.frontmatter.slug}`}>
    <Title>{data.frontmatter.title}</Title>
    <Description>{data.excerpt}</Description>
    <Meta>
      Algorithm from {moment(data.frontmatter.date, "MM-DD-YYYY").fromNow()}
    </Meta>
  </Post>
)

const Article = ({ data }) => (
  <Post to={`/articles/${data.frontmatter.slug}`}>
    <Title>{data.frontmatter.title}</Title>
    <Description>{data.excerpt}</Description>
    <Meta>
      Article from {moment(data.frontmatter.date, "MM-DD-YYYY").fromNow()}
    </Meta>
  </Post>
)

const Paper = ({ data }) => (
  <Post to={`/papers/${data.frontmatter.slug}`}>
    <Title>{data.frontmatter.title}</Title>
    <Description>{data.excerpt}</Description>
    <Meta>
      Paper from {moment(data.frontmatter.date, "MM-DD-YYYY").fromNow()}
    </Meta>
  </Post>
)

const Project = ({ data }) => (
  <Post to={`/projects/${data.frontmatter.slug}`}>
    <Title>{data.frontmatter.title}</Title>
    <Description>{data.excerpt}</Description>
    <Meta>
      Project from {moment(data.frontmatter.date, "MM-DD-YYYY").fromNow()}
    </Meta>
  </Post>
)

const Snippet = ({ data }) => (
  <Post to={`/snippets/${data.frontmatter.slug}`}>
    <Title>{data.frontmatter.title}</Title>
    <Description>{data.excerpt}</Description>
    <Meta>
      Snippet from {moment(data.frontmatter.date, "MM-DD-YYYY").fromNow()}
    </Meta>
  </Post>
)

export default ({ data }) => {
  const items = [
    ...data.algorithms.edges,
    ...data.articles.edges,
    ...data.papers.edges,
    ...data.projects.edges,
    ...data.snippets.edges,
  ]

  items.sort((a, b) => {
    return moment(a.node.frontmatter.date, "MM-DD-YYYY").isBefore(
      moment(b.node.frontmatter.date, "MM-DD-YYYY")
    )
  })

  return (
    <div>
      <Minion>Feed</Minion>
      <Container>
        {items.map(({ node }, i) => (
          <div key={i}>
            {
              {
                algorithms: <Algorithm data={node} />,
                articles: <Article data={node} />,
                papers: <Paper data={node} />,
                projects: <Project data={node} />,
                snippets: <Snippet data={node} />,
              }[node.fields.collection]
            }
          </div>
        ))}
      </Container>
    </div>
  )
}

export const FeedQuery = graphql`
  fragment FeedQuery on Query {
    algorithms: allMarkdownRemark(
      filter: { fields: { collection: { eq: "algorithms" } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date
          }
          fields {
            collection
          }
        }
      }
    }
    articles: allMarkdownRemark(
      filter: { fields: { collection: { eq: "articles" } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date
          }
          fields {
            collection
          }
        }
      }
    }
    papers: allMarkdownRemark(
      filter: { fields: { collection: { eq: "papers" } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date
          }
          fields {
            collection
          }
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { fields: { collection: { eq: "projects" } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date
          }
          fields {
            collection
          }
        }
      }
    }
    snippets: allMarkdownRemark(
      filter: { fields: { collection: { eq: "snippets" } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date
          }
          fields {
            collection
          }
        }
      }
    }
  }
`
