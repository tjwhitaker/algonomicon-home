import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import SidebarLayout from "../components/layout/sidebar-layout"
import Main from "../components/layout/main"
import Sidebar from "../components/layout/sidebar"
import Minion from '../components/text/minion'
import BlockContent from '@sanity/block-content-to-react'
import Image from 'gatsby-image'
import { Helmet } from 'react-helmet'

export default ({ data }) => (
  <SidebarLayout>
    <Helmet>
      <title>{data.article.title} | Algonomicon</title>
    </Helmet>
    <Main>
      <Title>{data.article.title}</Title>
      <Image fluid={data.article.heroImage.asset.fluid} />
      <BlockContent blocks={data.article._rawContent} />
    </Main>
    <Sidebar>
      <div>
        <Minion>Meta</Minion>
        <Meta>
          <Field>Author: {data.article.author}</Field>
          <Field>Created: {data.article._createdAt}</Field>
          <Field>Updated: {data.article._updatedAt}</Field>
        </Meta>
      </div>
      <div>
        <Minion>Outline</Minion>
        <Outline>
          <BlockContent blocks={data.article._rawOutline} />
        </Outline>
      </div>
    </Sidebar>
  </SidebarLayout>
)

export const query = graphql`
  query($slug: String!) {
    article: sanityArticle(slug: {current: {eq: $slug}}) {
      title
      description
      author
      _rawOutline
      _rawContent
      _createdAt
      _updatedAt
      heroImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

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
    list-style:inside;
    margin-left:0;

    li {
      margin-bottom:1rem;

      ul {
        list-style: inside circle;
        margin-left: 1.625rem;
        margin-top:0;

        li {
          margin-bottom: 0;
        }
      }
    }
  }
`