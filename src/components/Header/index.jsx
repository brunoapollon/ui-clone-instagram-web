import React, { useState, useCallback } from "react";

import {
  AiFillHome,
  AiOutlineCompass,
  AiOutlineHeart,
  AiFillCloseCircle,
} from "react-icons/ai";
import { BiMessageRounded, BiSearch } from "react-icons/bi";

import logoHeader from "../../assets/Logo-header.png";
import profile from "../../assets/profile.jfif";

import InputHeader from "../InputHeader";

import { Container, Content } from "./styles";

function Header() {
  const [search, setSearch] = useState(false);
  const handleSearchOpen = useCallback(() => {
    setSearch(true);
  }, []);
  const handleSearchCloese = useCallback(() => {
    setSearch(false);
  }, []);
  return (
    <Container>
      <Content>
        <a href="a">
          <img className="logo-header" src={logoHeader} alt="logo-header" />
        </a>
        <InputHeader>
          {!search ? (
            <button
              className="search-button"
              onClick={() => {
                handleSearchOpen();
              }}
            >
              <BiSearch size={15} />
              <span>Pesquisar</span>
            </button>
          ) : (
            <div className="search-selected">
              <input placeholder="Pesquisar" />
              <AiFillCloseCircle
                className="close-button-icon close-button"
                size={20}
                onClick={() => {
                  handleSearchCloese();
                }}
              />
            </div>
          )}
        </InputHeader>
        <div className="icons">
          <a href="a">
            <AiFillHome size={25} />
          </a>
          <a href="a">
            <BiMessageRounded size={25} />
          </a>
          <a href="a">
            <AiOutlineCompass size={25} />
          </a>
          <a href="a">
            <AiOutlineHeart size={25} />
          </a>
          <a href="a">
            <img className="profile" src={profile} alt="profile" />
          </a>
        </div>
      </Content>
    </Container>
  );
}

export default Header;
