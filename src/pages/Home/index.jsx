import React from "react";

import Header from "../../components/Header";

import { Container, Content } from "./styles";

function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <h1>Container</h1>
      </Content>
    </Container>
  );
}

export default Home;
