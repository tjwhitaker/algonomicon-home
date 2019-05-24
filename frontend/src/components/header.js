import React from "react"
import Logo from "./logo"
import Wrapper from "./wrapper"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { Link, StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      {
        file(relativePath: { eq: "nebula-small.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2160) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Header fluid={data.file.childImageSharp.fluid}>
          <Wrapper>
            <Masthead>
              <Logo />
              <Nav>
                <NavLink to="/about" activeClassName="active">
                  About
                </NavLink>
                <NavLink to="/contact" activeClassName="active">
                  Contact
                </NavLink>
              </Nav>
            </Masthead>
            <Intro>
              <Headline>Machine Learning for Fun and Profit</Headline>
              <Tagline>
                Still under construction. Thanks for bearing with us! Sign up
                for updates.
              </Tagline>
              <Register>
                <InputContainer>
                  <Icon>
                    <svg
                      style={{ display: "block" }}
                      aria-hidden="true"
                      data-prefix="fas"
                      data-icon="user-astronaut"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="svg-inline--fa fa-user-astronaut fa-w-14 fa-3x"
                    >
                      <path
                        fill="currentColor"
                        d="M64 224h13.5c24.7 56.5 80.9 96 146.5 96s121.8-39.5 146.5-96H384c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-13.5C345.8 39.5 289.6 0 224 0S102.2 39.5 77.5 96H64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm40-88c0-22.1 21.5-40 48-40h144c26.5 0 48 17.9 48 40v24c0 53-43 96-96 96h-48c-53 0-96-43-96-96v-24zm72 72l12-36 36-12-36-12-12-36-12 36-36 12 36 12 12 36zm151.6 113.4C297.7 340.7 262.2 352 224 352s-73.7-11.3-103.6-30.6C52.9 328.5 0 385 0 454.4v9.6c0 26.5 21.5 48 48 48h80v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h80c26.5 0 48-21.5 48-48v-9.6c0-69.4-52.9-125.9-120.4-133zM272 448c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16v48h32v-48c0-8.8-7.2-16-16-16z"
                      />
                    </svg>
                  </Icon>
                  <Input type="text" placeholder="example@algonomicon.com" />
                </InputContainer>
                <Button>Sign Up!</Button>
              </Register>
            </Intro>
          </Wrapper>
        </Header>
      )
    }}
  />
)

const Header = styled(BackgroundImage)`
  background-color: #111;
  background-size: cover;
  background-position: center bottom;
  height: 18rem;
  position: relative;
`

const Masthead = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Nav = styled.div`
  display: flex;
  align-items: center;
`

const NavLink = styled(Link)`
  color: white;
  margin-left: 1.5rem;
  font-size: 0.87055rem;
  font-weight: bold;
  text-decoration: none;
  font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  &:hover {
    color: #007bff;
  }

  &.active {
    color: #007bff;
  }
`

const Intro = styled.div`
  position: absolute;
  width: 100%;
  bottom: 1rem;
`

const Headline = styled.h1`
  color: white;
  margin: 0;
  padding-bottom: 0.2rem;
  border: none;
`

const Tagline = styled.h4`
  color: white;
  margin: 0;
`

const Register = styled.div`
  display: flex;
  position: relative;
  margin-top: 1rem;
`

const Button = styled.button`
  display: block;
  color: white;
  background: linear-gradient(to left, #fdca7a, #ed9e6f) repeat;
  background-position: 0 0;
  background-size: 200% auto;
  border-radius: 3px;
  margin: 0 1rem;
  padding: 0 2rem;
  font-weight: bold;
  font-size: 0.87055rem;
  border: 0;
  font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  &:hover {
    color: white;
    background-position: -100px 0;
  }
`

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
`

const Icon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 2rem;
  line-height: 1;
  color: #aaa;
`

const Input = styled.input`
  width: 100%;
  padding: 1rem 4rem;
  margin: 0;
  border-radius: 3px;
  border: none;

  &:invalid {
    border: none;
    outline: none;
    box-shadow: none;
  }
`
