import React from 'react'
import { graphql } from 'gatsby'
import SidebarLayout from "../components/layout/sidebar-layout"
import Main from "../components/layout/main"
import Sidebar from "../components/layout/sidebar"
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Minion from '../components/text/minion'
import BlockContent from '@sanity/block-content-to-react'
import serializers from '../utils/serializers'
import { Link } from 'gatsby'

export const query = graphql`
  query($slug: String!) {
    paper: sanityPaper(slug: {current: {eq: $slug}}) {
      title
      author
      source
      _rawContent
      _createdAt
      _updatedAt
    }
  }
`

export default ({ data: {paper} }) => (
  <SidebarLayout>
    <Helmet>
      <title>{paper.title} | Algonomicon</title>
    </Helmet>
    <Main>
      <Title>{paper.title}</Title>
      <BlockContent blocks={paper._rawContent} serializers={serializers} />
    </Main>
    <Sidebar>
      <div>
        <Minion>Meta</Minion>
        <Meta>
          <Field>Author: {paper.author}</Field>
          <Field>Source: <Link to={paper.source}>{paper.source}</Link></Field>
          <Field>Created: {paper._createdAt}</Field>
          <Field>Updated: {paper._updatedAt}</Field>
        </Meta>
      </div>
    </Sidebar>
  </SidebarLayout>
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