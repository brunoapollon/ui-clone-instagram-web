import React from "react";

import { Container } from "./styles";

function CardSugestion(props) {
  return (
    <Container>
      <img src={props.iconUserSugest} alt="icon" />
      <div className="user-name">
        <a href="profile">{props.usernameSugest}</a>
        <div>{props.sugestion}</div>
      </div>
      <div className="follow">Seguir</div>
    </Container>
  );
}

export default CardSugestion;
