import styled from "styled-components";

export const Container = styled.div`
  width: 215px;
  height: 28px;
  padding: 7px;
  background-color: #fafafa;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  box-sizing: border-box;
  @media (max-width: 599px) {
    display: none;
  }
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  font-family: "Roboto";
  font-size: 8px;
  justify-content: center;
  align-items: center;
  .search-selected {
    width: 100%;
    height: 100%;
    background-color: #fafafa;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    cursor: text;
    > input {
      font-size: 12px;
      background: transparent;
      border: none;
      &:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
      }
    }
  }
`;
