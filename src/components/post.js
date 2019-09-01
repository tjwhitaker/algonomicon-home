import styled from "styled-components"

export default styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #fff4;

  h3 {
    margin-top: 0;
  }

  h4 {
    color: white;
    margin: 0;
    line-height: 1.625;
  }

  small {
    color: #aaa;
    line-height: 1.5;
    font-weight: normal;
    display: block;
  }

  p {
    color: #d4d4d4;
    font-weight: normal;
    margin-bottom: 0;
  }

  &:first-child {
    padding-top: 0;
  }

  &:hover {
    h4 {
      color: #ff4081;
    }
  }
`
