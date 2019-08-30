import React from "react"
import Logo from "./logo"
import Wrapper from "./wrapper"
import styled from "styled-components"
import { Link } from "gatsby"

export default () => (
  <Header className="hero">
    <Wrapper style={{ paddingBottom: 0 }}>
      <Masthead>
        <Logo />
        <Nav>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
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
    </Wrapper>
  </Header>
)

const Header = styled.div`
  margin-top: 1rem;
`

const Masthead = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
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
  color: black;
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
  padding-right: 1rem;
`

const Headline = styled.h1`
  color: white;
  margin: 0;
  padding-bottom: 0.2rem;
  border: none;

  @media screen and (max-width: 600px) {
    display: none;
  }
`

const MobileHeadline = styled.h4`
  display: none;
  color: white;
  margin: 0;
  padding-right: 1rem;
  line-height: 1.625;

  @media screen and (max-width: 600px) {
    display: block;
  }
`

const Tagline = styled.h4`
  color: white;
  margin: 0;

  @media screen and (max-width: 600px) {
    display: none;
  }
`

const Register = styled.form`
  display: flex;
  position: relative;
  margin-top: 1rem;
  margin-bottom: 0;
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
  white-space: nowrap;

  &:hover {
    color: white;
    background-position: -100px 0;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
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

  @media screen and (max-width: 600px) {
    width: 1.5rem;
    left: 0.75rem;
  }
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

  @media screen and (max-width: 600px) {
    padding: 0.8rem 1.5rem 0.8rem 3rem;
    font-size: 0.8rem;
  }
`
