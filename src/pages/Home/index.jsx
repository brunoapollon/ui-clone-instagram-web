import React from "react";

import Header from "../../components/Header";
import Stories from "../../components/Stories";
import Posts from "../../components/Posts";
import CardSugestion from "../../components/CardSugestion";

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
          <Posts
            iconProfile={profile}
            imagePost={profile}
            lastIconImageLikes={profile}
            lastLike="brunoapollon"
            likes="100"
            user="brunoapollon"
            description={description}
          />
          <Posts
            iconProfile={profile}
            imagePost={profile}
            lastIconImageLikes={profile}
            lastLike="brunoapollon"
            likes="100"
            user="brunoapollon"
            description={description}
          />
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
        <div className="container-2">
          <section className="info-account">
            <img src={profile} alt="profile" />
            <div className="user-name">
              <a href="profile">brunoapollon</a>
              <div>Bruno</div>
            </div>
            <div className="modal-switch-account">Mudar</div>
          </section>
          <section className="sugestions-for-user">
            <div className="title-section">
              <div>Sugestões para você</div>
              <div className="see-all">Ver tudo</div>
            </div>
            <CardSugestion
              iconUserSugest={profile}
              usernameSugest="brunoapollon"
              sugestion="Novo no instagram"
            />
            <CardSugestion
              iconUserSugest={profile}
              usernameSugest="brunoapollon"
              sugestion="Novo no instagram"
            />
            <CardSugestion
              iconUserSugest={profile}
              usernameSugest="brunoapollon"
              sugestion="Novo no instagram"
            />
            <CardSugestion
              iconUserSugest={profile}
              usernameSugest="brunoapollon"
              sugestion="Novo no instagram"
            />
            <CardSugestion
              iconUserSugest={profile}
              usernameSugest="brunoapollon"
              sugestion="Novo no instagram"
            />
          </section>
        </div>
      </Content>
    </Container>
  );
}

export default Home;
