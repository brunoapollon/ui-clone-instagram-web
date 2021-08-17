import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  align-items: center;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 920px;
  display: flex;
  .container-1 {
    width: 610px;
    .stories {
      margin-bottom: 50px;
    }
  }
  .container-2 {
    flex: 1;
    background: #000;
  }
`;
