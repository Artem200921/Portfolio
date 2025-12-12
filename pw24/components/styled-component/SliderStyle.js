import styled from "styled-components";

export const SliderStyle = styled.section`
  padding-bottom: 40px;
  background-color: rgba(171, 148, 102, 1);
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.8s ease forwards;
  animation-delay: ${(props) => props.delay || "0s"};
  .container {
    max-width: 1100px;
    margin: 0 auto;
    height: 520px;
    display: flex;
    overflow: hidden;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    gap: 25px;

    button {
      width: 44px;
      height: 44px;
      font-size: 20px;
      background-color: rgba(255, 255, 255, 0.12);
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.18s, transform 0.12s;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    button:hover {
      background-color: rgba(255, 255, 255, 0.18);
      transform: translateY(-2px);
    }

    .left-controls {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    ul {
      display: flex;
      column-gap: 10px;
      justify-content: center;
      align-items: center;
      list-style: none;
      padding: 0;
      margin: 0;
      flex: 1;
      justify-content: center;
    }

    li {
      position: relative;
      display: none;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      overflow: hidden;
      background: #fff;
      box-shadow: 0 6px 22px rgba(0, 0, 0, 0.08);
    }

    li.active {
      display: flex;
      justify-content: center;
      transform: scale(1.02);
    }

    li div {
      opacity: 0;
      transition: opacity 0.4s ease;
      position: absolute;
      z-index: 5;
      background-color: rgba(0, 0, 0, 0.8);
      width: 100%;
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

    li div button.port {
      width: fit-content;
      padding: 8px 16px;
      color: #fff;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
