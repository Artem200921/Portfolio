import styled from "styled-components";

export const HeaderStyle = styled.header`
  background: linear-gradient(90deg, #c6ab76 0%, #b78f4f 100%);
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  .container {
    max-width: 1100px;
    margin: 0 auto;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    gap: 16px;
  }

  a {
    color: #fff9ea;
    text-decoration: none;
    transition: color 0.4s;
  }

  a:hover { color: #fff; }
`;
