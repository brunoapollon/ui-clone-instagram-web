import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  width: 100%;
  align-items: center;
  > img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  .user-name {
    flex: 1;
    font-family: "Roboto", serif;
    margin-left: 15px;
    font-size: 12px;
    > a {
      font-size: 14px;
      text-decoration: none;
      color: #000;
      font-weight: 500;
      margin-bottom: 5px;
    }
    > div {
      color: #8e8e8e;
    }
  }
  .follow {
    font-family: "Roboto", serif;
    color: #0095f6;
    font-size: 12px;
    cursor: pointer;
  }
  & + div {
    margin-top: 15px;
  }
`;
