import React from "react";

import { Container, Content } from "./styles";

function InputHeader(props) {
  return (
    <Container>
      <Content>{props.children}</Content>
    </Container>
  );
}

export default InputHeader;
