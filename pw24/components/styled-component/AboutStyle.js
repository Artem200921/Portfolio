import styled from "styled-components";

export const AboutStyle = styled.section`
  display: flex;
  height:100%;
  justify-content: center;

  background-color: rgba(193, 166, 114, 1);
  width: 100%;
  padding: 60px 0;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.8s ease forwards;
  animation-delay: ${props => props.delay || '0s'};

  .container {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 28px;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,0.06);
    border-radius: 12px;
    box-shadow: 0 6px 24px rgba(0,0,0,0.08);
  }

  h1 {
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 10px;
    color: #2b2b2b;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    color: #2f2f2f;
    text-align: center;
    max-width: 820px;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
