import styled from "styled-components"

export default styled.div`
  border-right: 1px solid #fff3;
  padding-right: 1rem;

  @media screen and (max-width: 600px) {
    border-right: 0;
    padding-right: 0;
    grid-column: 1 / span 2;
  }
`
