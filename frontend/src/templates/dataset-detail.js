import React from 'react'
import { graphql } from 'gatsby'
import SidebarLayout from "../components/layout/sidebar-layout"
import Main from "../components/layout/main"
import Sidebar from "../components/layout/sidebar"
import Minion from '../components/text/minion'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

export default ({ data }) => (
  <SidebarLayout>
    <Helmet>
      <title>{data.dataset.title} | Algonomicon</title>
    </Helmet>
    <Main>
      <p>{data.dataset.title}</p>
      <p>{data.dataset.description}</p>
    </Main>
    <Sidebar>
      <div>
        <Minion>Meta</Minion>
        <Meta>
          <Field>Creator:</Field>
          <Field>Format:</Field>
          <Field>Instances:</Field>
          <Field>Created:</Field>
          <Field>Updated:</Field>
        </Meta>
      </div>
    </Sidebar>
  </SidebarLayout>
)


export const query = graphql`
  query($slug: String!) {
    dataset: sanityDataset(slug: {current: {eq: $slug}}) {
      title
      description
      creator
      format
      instances
      _createdAt
      _updatedAt
    }
  }
`

const Meta = styled.div`
  padding:1rem 0;
`

const Field = styled.p`
  margin: 0;
`