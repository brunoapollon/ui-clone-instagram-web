import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  box-sizing: border-box;
  > header {
    border-bottom: 1px solid #dbdbdb;
    display: flex;
    align-items: center;
    padding: 16px;

    .icon-user {
      flex: 1;
      display: flex;
      align-items: center;
      > img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 20px;
      }
      > a {
        text-decoration: none;
        color: #262626;
        > span {
          font-family: "Roboto", serif;
          font-size: 14px;
          font-weight: 500;
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
    > button {
      border: none;
      background: transparent;
    }
  }
  .image-post {
    > img {
      width: 100%;
    }
  }
  .icons-posts {
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    .icons-right {
      flex: 1;
      > svg {
        margin-right: 10px;
      }
    }
  }
  & + div {
    margin-top: 50px;
  }
  .likes {
    width: 100%;
    > button {
      width: 100%;
      padding: 10px 20px;
      display: flex;
      align-items: flex-start;
      background: transparent;
      border: none;
      cursor: default;
      > strong,
      a {
        text-decoration: none;
        color: #000;
      }
      > img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 10px;
      }
      @media (max-width: 600px) {
        > img {
          margin-right: 0;
        }
        > span {
          padding: 0;
        }
      }
    }
  }
  .description-image {
    padding: 0 20px;
    font-size: 16px;
    > span {
      font-family: "Roboto", serif;
      > a {
        text-decoration: none;
        color: #000;
        font-family: "Roboto", serif;
        font-weight: 500;
      }
    }
  }
  .coments {
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    > a {
      margin-bottom: 10px;
      font-family: "Roboto", serif;
      text-decoration: none;
      font-size: 16px;
      color: #8e8e8e;
    }
    > span {
      margin-bottom: 10px;
      font-family: "Roboto", serif;
      text-decoration: none;
      > a {
        text-decoration: none;
        color: #000;
        font-weight: 500;
      }
    }
    .time-post {
      font-size: 12px;
    }
  }
  .post-coment {
    display: flex;
    padding: 20px 20px;
    border-top: 1px solid #dbdbdb;
    align-items: center;
    > form {
      display: flex;
      flex: 1;
      margin: 0 5px;
      > button {
        color: #0095f6;
        background: transparent;
        border: none;
        font-family: "Roboto", serif;
        font-size: 16px;
        font-weight: 500;
      }
      > textarea {
        flex: 1;
        height: 40px;
        border: none;
        font-family: "Roboto", serif;
        resize: none;
        padding: 10px 10px;
        box-sizing: border-box;
        font-size: 16px;
        &:focus {
          box-shadow: 0 0 0 0;
          border: 0 none;
          outline: 0;
          .button-comment {
          }
        }
      }
    }
  }
  & + div {
    margin-top: 20px;
  }
  @media (max-width: 600px) {
    border-left: none;
    border-right: none;
  }
`;
