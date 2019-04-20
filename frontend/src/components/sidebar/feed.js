import React from "react"
import styled from "styled-components"
import Minion from "../text/minion"
import { StaticQuery, Link, graphql } from 'gatsby'

const Container = styled.div`
  max-height: 100%;
  margin-right: -50px;
  padding-right: 42px;
  overflow: scroll;
  position: absolute;
`

const Post = styled(Link)`
  padding:1rem 0;
  border-bottom:1px solid #ccc;
  display: block;
`

const Title = styled.h3`
  color: hsla(0, 0%, 0%, 0.8);
  margin-top:0;
`

const Description = styled.p`
  color: hsla(0, 0%, 0%, 0.8);
  font-weight:normal;
`

const Meta = styled.small`
  color: #ccc;
  font-weight: normal;
`

const Article = ({ data }) => (
  <Post to={`/articles/${data.slug.current}`}>
    <Title>{data.title}</Title>
    <Description>{data.description.substring(0, 100)}...</Description>
    <Meta>Article from time ago</Meta>
  </Post>
)

const Dataset = ({ data }) => (
  <div>dataset</div>
)

const Paper = ({ data }) => (
  <div>paper</div>
)

const Project = ({ data }) => (
  <div>project</div>
)

const Video = ({ data }) => (
  <div>video</div>
)

const Feed = ({ data }) => {

  const items = [
    ...data.articles.edges,
    ...data.datasets.edges,
    ...data.papers.edges,
    ...data.projects.edges,
    ...data.videos.edges
  ]
  
  items.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt)
  })

console.log(items)

  return (
    <div>
      <Minion>Feed</Minion>
      <Container>
        { items.map(({ node }, i) => 
          <div>
            {{
              article: <Article data={node} key={i} />,
              dataset: <Dataset data={node} key={i} />,
              paper: <Paper data={node} key={i} />,
              project: <Project data={node} key={i} />,
              video: <Video data={node} key={i} />
            }[node._type]}
          </div>
        )}
      </Container>
    </div>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query FeedQuery {
        articles: allSanityArticle(filter: {slug: {current: {ne: null}}}) {
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
        datasets: allSanityDataset(filter: {slug: {current: {ne: null}}}) {
          edges {
            node {
              _type
              _createdAt
              slug {
                current
              }
            }
          }
        }
        papers: allSanityPaper(filter: {slug: {current: {ne: null}}}) {
          edges {
            node {
              _type
              _createdAt
              slug {
                current
              }
            }
          }
        }
        projects: allSanityProject(filter: {slug: {current: {ne: null}}}) {
          edges {
            node {
              _type
              _createdAt
              slug {
                current
              }
            }
          }
        }
        videos: allSanityVideo(filter: {slug: {current: {ne: null}}}) {
          edges {
            node {
              _type
              _createdAt
              slug {
                current
              }
            }
          }
        }
      }
    `}
    render={data => <Feed data={data} />}
    />
)
