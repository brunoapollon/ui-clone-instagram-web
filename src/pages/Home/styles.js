import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  align-items: center;
  > svg {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 935px;
  display: flex;
  @media (max-width: 999px) {
    justify-content: center;
    max-width: 100%;
  }
  .container-1 {
    width: calc(100% - 293px);
    @media (max-width: 999px) {
      width: 600px;
    }

    margin-right: 28px;
    @media (max-width: 999px) {
      margin: 0;
    }
    .stories {
      margin-bottom: 50px;
    }
  }
  .container-2 {
    width: 293px;
    padding-top: 35px;
    @media (max-width: 999px) {
      display: none;
    }
    .info-account {
      display: flex;
      width: 100%;
      align-items: center;
      > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
      }
      .user-name {
        flex: 1;
        font-family: "Roboto", serif;
        margin-left: 15px;
        font-size: 14px;
        > a {
          text-decoration: none;
          color: #000;
          font-weight: 500;
          margin-bottom: 5px;
        }
        > div {
          color: #8e8e8e;
        }
      }
      .modal-switch-account {
        font-family: "Roboto", serif;
        font-size: 12px;
        color: #0095f6;
        cursor: pointer;
      }
    }
    .sugestions-for-user {
      margin-top: 15px;
      .title-section {
        display: flex;
        justify-content: space-between;
        font-family: "Roboto", serif;
        font-size: 14px;
        color: #8e8e8e;
        margin-bottom: 15px;
        .see-all {
          font-size: 12px;
          color: #262626;
          cursor: pointer;
        }
      }
    }
  }
`;
