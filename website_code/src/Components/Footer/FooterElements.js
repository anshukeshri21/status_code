import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: black;
  color: #ffffff;
  text-align: center;
  padding: 20px;
  position: relative;
  bottom: 0;
  width: 100%;
  z-index: 1;

  @media (max-width: 600px) {
    padding: 10px;
    font-size: 14px;
  }
`;

export const FooterLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 600px) {
    display: block;
    margin-bottom: 10px;
  }
`;