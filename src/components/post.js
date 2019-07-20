import styled from "styled-components"

export default styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;

  h3 {
    color: hsla(0, 0%, 0%, 0.8);
    margin-top: 0;
  }

  h4 {
    color: hsla(0, 0%, 0%, 0.8);
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
    color: hsla(0, 0%, 0%, 0.8);
    font-weight: normal;
    margin-bottom:0;
  }

  &:first-child {
    padding-top: 0;

    h4 {
      margin-top:1rem;
    }
  }
`
