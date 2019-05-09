import React from "react"
import styled from "styled-components"
import BlockContent from "@sanity/block-content-to-react"
import serializers from "../utils/serializers"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Sidebar, Minion } from "../components"

export const query = graphql`
  query($slug: String!) {
    dataset: sanityDataset(slug: { current: { eq: $slug } }) {
      title
      description
      creator
      format
      instances
      _createdAt
      _updatedAt
      _rawContent
    }
  }
`

export default ({ data: { dataset } }) => (
  <Layout>
    <Helmet>
      <title>{dataset.title} | Algonomicon</title>
    </Helmet>
    <Main>
      <Title>{dataset.title}</Title>
      <BlockContent blocks={dataset._rawContent} serializers={serializers} />
    </Main>
    <Sidebar>
      <div>
        <Minion>Meta</Minion>
        <Meta>
          <Field>Creator: {dataset.creator}</Field>
          <Field>Format: {dataset.format}</Field>
          <Field>Instances: {dataset.instances}</Field>
          <Field>Created: {dataset._createdAt}</Field>
          <Field>Updated: {dataset._updatedAt}</Field>
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
