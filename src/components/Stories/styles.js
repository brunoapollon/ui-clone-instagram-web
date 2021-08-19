import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 118px;
  display: flex;
  overflow: auto;
  padding: 16px 0;
  background: #ffffff;
  box-sizing: border-box;
  align-items: center;
  margin-bottom: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  #arrow-right {
    position: sticky;
    right: 15px;
    > svg {
      fill: #dbdbdb;
    }
  }
  > ul {
    display: flex;
    padding: 0 0 0 15px;
  }
  > ul,
  li {
    list-style: none;
  }
  .canvans {
    width: 66px;
    height: 66px;
    margin: 0 4px;
    background: -webkit-linear-gradient(left, #743ad5, #d53a9d);
    border-radius: 50%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    .icon-story {
      border: 2px solid #fff;
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }
  }
`;
