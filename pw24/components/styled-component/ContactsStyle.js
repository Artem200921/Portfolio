import styled from "styled-components";

export const ContactsStyle = styled.ul`
  display: flex;
  column-gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;

  li { display: flex; align-items:center; }

  a {
    color: #fff9ea;
    text-decoration: none;
    transition: color 0.15s;
    font-weight: 600;
  }

  a:hover { color: #ffffff; }
`;
