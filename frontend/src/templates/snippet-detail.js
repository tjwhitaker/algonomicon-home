import React from 'react'
import styled from 'styled-components'
import SidebarLayout from '../components/layout/sidebar-layout'
import Main from '../components/layout/main'
import Sidebar from '../components/layout/sidebar'
import Minion from '../components/text/minion'
import BlockContent from '@sanity/block-content-to-react'
import serializers from '../utils/serializers'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

export default ({ data: {snippet}}) => (
  <SidebarLayout>
    <Helmet>
      <title>{snippet.title} | Algonomicon</title>
    </Helmet>
    <Main>
      <Title>{snippet.title}</Title>
      <BlockContent blocks={snippet._rawContent} serializers={serializers} />
    </Main>
    <Sidebar>
      <div>
        <Minion>Meta</Minion>
        <Meta>
          <Field>Created: {snippet._createdAt}</Field>
          <Field>Updated: {snippet._updatedAt}</Field>
        </Meta>
      </div>
    </Sidebar>
  </SidebarLayout>
)

export const query = graphql`
  query($slug: String!) {
    snippet: sanitySnippet(slug: {current: {eq: $slug}}) {
      title
      _rawContent
      _createdAt
      _updatedAt
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