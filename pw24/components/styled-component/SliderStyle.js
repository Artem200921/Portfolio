import styled from "styled-components";

export const SliderStyle = styled.section`
  width: 600px;
  height: 250px;
  display: flex;
  overflow-x: hidden;
  justify-content: space-between;
  align-items: center;

  button {
    width: 30px;
    height: 30px;
    font-size: 24px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  ul {
    display: flex;
    column-gap: 10px;
    justify-content: center;
    align-items: center;
  }

  li {
    position: relative;
    display: none;
    width: 300px;
    height: 200px;
  }

  li.active {
    display: flex;
  }

  li div {
    opacity: 0;
    transition: opacity 0.5s;
    position: absolute;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.8);
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    row-gap: 40px;
  }

  li div p {
    font-size: 18px;
    width: 80%;
    text-align: center;
    }

  li div a {
    color: #fff;
  }

  li:hover div {
    opacity: 1;
  }
`;
