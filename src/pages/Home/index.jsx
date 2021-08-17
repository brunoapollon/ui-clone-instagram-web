import React from "react";

import Header from "../../components/Header";
import Stories from "../../components/Stories";

import { Container, Content } from "./styles";

function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Stories />
      </Content>
    </Container>
  );
}

export default Home;
