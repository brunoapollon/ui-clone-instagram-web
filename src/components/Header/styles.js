import styled from "styled-components";

export const Container = styled.header`
  background-color: #fff;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 20px;
  height: 55px;
  padding: 10px;
  box-sizing: border-box;
`;
export const Content = styled.div`
  max-width: 935px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  .logo-header {
    width: 100px;
    height: 30px;
  }
  .profile {
    width: 25px;
    border-radius: 25px;
  }
  .icons {
    width: 198px;
    height: 22px;
    display: flex;
    padding-left: 24px;
    justify-content: space-between;
    align-items: center;
    > a {
      color: #000;
    }
  }
  .search-button {
    width: 100%;
    height: 100%;
    background-color: #fafafa;
    color: #8e8e8e;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    padding: 0;
    border: none;
    cursor: text;
    font-size: 12px;
    > svg {
      margin-right: 5px;
    }
  }
  .close-button {
    fill: #c7c7c7;
    padding: 0;
    border: 0;
    cursor: default;
  }
`;
