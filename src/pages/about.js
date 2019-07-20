import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import { Logo, Wrapper } from "../components"

export default ({ data }) => (
  <div>
    <Helmet>
      <title>About | Algonomicon</title>
    </Helmet>
    <Container>
      <Header fluid={data.file.childImageSharp.fluid}>
        <Wrapper>
          <Masthead>
            <Logo />
            <Nav>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/">Home</NavLink>
            </Nav>
            <MobileNav>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bars"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="svg-inline--fa fa-bars fa-w-14 fa-5x"
              >
                <path
                  fill="white"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                />
              </svg>
            </MobileNav>
          </Masthead>
          <Intro></Intro>
        </Wrapper>
      </Header>
    </Container>
  </div>
)

const Container = styled.div`
  width: 100%;
`

const Header = styled(BackgroundImage)`
  background-color: black;
  background-size: cover;
  background-position: center bottom;
  height: 100vh;
  position: relative;

  ::before {
    filter: brightness(0.5);
  }

  @media screen and (max-width: 600px) {
    height: 15rem;
  }
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

  @media screen and (max-width: 600px) {
    display: none;
  }
`

const MobileNav = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;

  svg {
    height: 25px;
  }

  @media screen and (max-width: 600px) {
    display: block;
  }
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
  top: 50%;
  left: 0%;
  transform: translate(0%, -50%);
  max-width: 60%;

  h1 {
    color: white;
    font-size: 10rem;
    font-family: monospace;
  }
`

export const query = graphql`
  {
    file(relativePath: { eq: "astronaut.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
