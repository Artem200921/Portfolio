import styled from "styled-components";

export const Nav = styled.nav`
  ul {
    display: flex;
    column-gap: 20px;
    margin: 0;
    padding: 0;
    list-style: none;
    align-items: center;
  }

  a {
    color: #f7f4ef;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 6px;
    transition: background 0.12s, color 0.12s;
    font-weight: 600;
  }

  a:hover { background: rgba(255,255,255,0.06); color: #fff; }
`;
