import React from 'react'
import { graphql } from 'gatsby'
import SidebarLayout from "../components/layout/sidebar-layout"
import Main from "../components/layout/main"
import Sidebar from "../components/layout/sidebar"
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Minion from '../components/text/minion'

export default ({ data: {video} }) => (
  <SidebarLayout>
    <Helmet>
      <title>{video.title} | Algonomicon</title>
    </Helmet>
    <Main>
      <div style={{position: 'relative', 'padding-bottom':'56.25%', width: '100%'}}>
        <iframe width="100%" height="100%" title="Differential Equations" src="https://www.youtube-nocookie.com/embed/p_di4Zn4wz4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          style={{position:'absolute',top:'0',left:'0',width:'100%',height:'100%'}}  allowfullscreen></iframe>
      </div>
      <h2>{video.title}</h2>
      <p>{video.description}</p>
    </Main>
    <Sidebar>
      <div>
        <Minion>Meta</Minion>
        <Meta>
          <Field>Creator: {video.creator}</Field>
          <Field>Created: {video._createdAt}</Field>
          <Field>Updated: {video._updatedAt}</Field>
        </Meta>
      </div>
    </Sidebar>
  </SidebarLayout>
)


export const query = graphql`
  query($slug: String!) {
    video: sanityVideo(slug: {current: {eq: $slug}}) {
      title
      description
      creator
      _createdAt
      _updatedAt
    }
  }
`

const Meta = styled.div`
  padding: 1rem 0;
`

const Field = styled.p`
  margin: 0;
`