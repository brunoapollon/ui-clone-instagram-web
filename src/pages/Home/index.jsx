import React from "react";

import Header from "../../components/Header";
import Stories from "../../components/Stories";
import Posts from "../../components/Posts";

import profile from "../../assets/profile.jfif";

import { Container, Content } from "./styles";

function Home() {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut justo purus, dignissim vel molestie vehicula, convallis ut lacus.";
  return (
    <Container>
      <Header />
      <Content>
        <div className="container-1">
          <Stories />
          <Posts
            iconProfile={profile}
            imagePost={profile}
            lastIconImageLikes={profile}
            lastLike="brunoapollon"
            likes="100"
            user="brunoapollon"
            description={description}
          />
        </div>
        <div className="container-2"></div>
      </Content>
    </Container>
  );
}

export default Home;
