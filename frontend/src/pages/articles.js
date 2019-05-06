import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import SidebarLayout from "../components/layout/sidebar-layout"
import Main from "../components/layout/main"
import Sidebar from "../components/layout/sidebar"
import Search from "../components/sidebar/search"
import Sort from "../components/sidebar/sort"
import Tags from "../components/sidebar/tags"
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

export default ({ data: {articles} }) => {
  return (
    <SidebarLayout>
      <Helmet>
        <title>Articles | Algonomicon</title>
      </Helmet>
      <Main>
        {articles.edges.map(({ node }) => (
          <Post>
            <Link to={`/articles/${node.slug.current}`}>
              <div>
                <h3>{node.title}</h3>
                <p>{node.description.substring(0, 300)}...</p>
              </div>
            </Link>
          </Post>
        ))}
      </Main>
      <Sidebar>
        <Search />
        <Sort />
        <Tags />
      </Sidebar>
    </SidebarLayout>
  )
}

export const query = graphql`
  {
    articles: allSanityArticle(
      sort: {
        fields: [_createdAt]
        order: DESC 
    }) 
    {
      edges {
        node {
          title
          slug {
            current
          }
          description
        }
      }
    }
  }
`

const Post = styled.div`
  padding:1rem 0;
  border-bottom:1px solid #ccc;

  h3 {
    color:hsla(0,0%,0%,0.8); 
    margin-top: 0;
  }

  p {
    color: hsla(0,0%,0%,0.8);
    font-weight:normal;
  }

  &:first-child {
    padding-top:0;
  }
`