import React from "react"
import Layout from "../components/layout/layout"
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import ReactMapGL from 'react-map-gl'

export default () => (
  <Layout>
    <Helmet>
      <title>Contact | Algonomicon</title>
    </Helmet>
    <Contact>
      <Message>
        <Title>Contact</Title>
        <p>Thanks for your interest! I'd love to talk more if you have any questions, concerns or ideas. Feel free to use the form to email me, or get in touch through one of these other means.</p>
      </Message>
      <Form>
        <FieldGroup flex="0">
          <Input type="text" placeholder="Name" />
        </FieldGroup>

        <FieldGroup flex="0">
          <Input type="email" placeholder="Email" />
        </FieldGroup>

        <FieldGroup flex="1">
          <TextArea placeholder="Content" />
        </FieldGroup>

        <Button>Send</Button>
      </Form>
      <Map>
        <ReactMapGL 
          mapboxApiAccessToken="pk.eyJ1IjoiY2FtcDRjbGltYmVyIiwiYSI6ImNpdzhwM2VzbjAyc24yb21zZjduZHh3dmMifQ.k42_5Mnh3NX7pUqkQTA2SA"
          height="370px"
          width="100%"
          latitude={40.588722}
          longitude={-105.073333}
        />
      </Map>
    </Contact>
  </Layout>
)

const Contact = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom:2.5rem;
`

const Message = styled.div`
  flex: 0 0 100%;
`

const Title = styled.h1`
  margin-top: 0;
`

const Form = styled.div`
  flex: 0 0 50%;
  padding-right: 0.5rem;
  display:flex;
  flex-direction: column;
  position: relative;
`

const FieldGroup = styled.div`
  flex: ${props => props.flex};
`

const Input = styled.input`
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  padding: 0.5rem;
`

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 100%;
`

const Button = styled.button`
  background: black;
  color: white;
  font-weight: bold;
  display: inline-block;
  border: none;
  padding: 0.5rem 1rem;
  position: absolute;
  bottom: -3.5rem;
`

const Map = styled.div`
  flex: 0 0 50%;
  padding-left: 0.5rem;
`