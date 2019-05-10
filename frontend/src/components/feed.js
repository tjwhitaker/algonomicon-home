import React from "react"
import styled from "styled-components"
import moment from "moment"
import Minion from "./minion"
import { StaticQuery, Link, graphql } from "gatsby"

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

const Article = ({ data }) => (
  <Post to={`/articles/${data.slug.current}`}>
    <Title>{data.title}</Title>
    <Description>{data.description.substring(0, 100)}...</Description>
    <Meta>Article from {moment(data._createdAt).fromNow()}</Meta>
  </Post>
)

const Dataset = ({ data }) => (
  <Post to={`/datasets/${data.slug.current}`}>
    <Title>{data.title}</Title>
    <Description>{data.description.substring(0, 100)}...</Description>
    <Meta>Dataset from {moment(data._createdAt).fromNow()}</Meta>
  </Post>
)

const Paper = ({ data }) => (
  <Post to={`/papers/${data.slug.current}`}>
    <Title>{data.title}</Title>
    <Description>{data.abstract.substring(0, 100)}...</Description>
    <Meta>Paper from {moment(data._createdAt).fromNow()}</Meta>
  </Post>
)

const Project = ({ data }) => (
  <Post to={`/projects/${data.slug.current}`}>
    <Title>{data.title}</Title>
    <Description>{data.description.substring(0, 100)}...</Description>
    <Meta>Project from {moment(data._createdAt).fromNow()}</Meta>
  </Post>
)

const Snippet = ({ data }) => (
  <Post to={`/snippets/${data.slug.current}`}>
    <Title>{data.title}</Title>
    <Description>{data.description.substring(0, 100)}...</Description>
    <Meta>Snippet from {moment(data._createdAt).fromNow()}</Meta>
  </Post>
)

export const PureFeed = ({ data }) => {
  const items = [
    ...data.articles.edges,
    ...data.datasets.edges,
    ...data.papers.edges,
    ...data.projects.edges,
    ...data.snippets.edges,
  ]

  items.sort((a, b) => {
    return new Date(b.node._createdAt) - new Date(a.node._createdAt)
  })

  return (
    <div>
      <Minion>Feed</Minion>
      <Container>
        {items.map(({ node }, i) => (
          <div key={i}>
            {
              {
                article: <Article data={node} />,
                dataset: <Dataset data={node} />,
                paper: <Paper data={node} />,
                project: <Project data={node} />,
                snippet: <Snippet data={node} />,
              }[node._type]
            }
          </div>
        ))}
      </Container>
    </div>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query FeedQuery {
        articles: allSanityArticle {
          edges {
            node {
              _type
              _createdAt
              title
              description
              slug {
                current
              }
            }
          }
        }
        datasets: allSanityDataset {
          edges {
            node {
              _type
              _createdAt
              title
              description
              slug {
                current
              }
            }
          }
        }
        papers: allSanityPaper {
          edges {
            node {
              _type
              _createdAt
              title
              abstract
              slug {
                current
              }
            }
          }
        }
        projects: allSanityProject {
          edges {
            node {
              _type
              _createdAt
              title
              description
              slug {
                current
              }
            }
          }
        }
        snippets: allSanitySnippet {
          edges {
            node {
              _type
              _createdAt
              title
              description
              slug {
                current
              }
            }
          }
        }
      }
    `}
    render={data => <PureFeed data={data} />}
  />
)
