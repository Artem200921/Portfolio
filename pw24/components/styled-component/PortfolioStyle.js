import styled from "styled-components";

export const PortfolioStyle = styled.section`
  background-color: rgba(240, 240, 240, 1);
  padding: 60px 0;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.8s ease forwards;
  animation-delay: ${props => props.delay || '0s'};

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1000px;
    padding: 0 20px;
  }

  .card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .card:hover { transform: translateY(-6px); box-shadow: 0 12px 30px rgba(0,0,0,0.12); transition: transform 0.18s, box-shadow 0.18s; }

  h2 { margin: 0; color: #2c2c2c; }

  button { background: #b78f4f; color: #fff; border: none; padding: 8px 12px; border-radius: 8px; cursor: pointer; }
  button:hover { background: #9c7436; }

  .card img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  .card-body {
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .card a {
    color: #1a73e8;
    text-decoration: none;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
