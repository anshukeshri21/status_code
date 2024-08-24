import styled from 'styled-components';

export const ManualContainer = styled.section`
  padding: 50px;
  background: linear-gradient(to bottom, #1e1e1e, #121212);
  color: #e0e0e0;
  font-family: 'Arial', sans-serif;
  border-radius: 15px;
  box-shadow: 0 1px 7px rgba(255, 255, 255, 0.1);
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  color: #e0e0e0;
  margin-bottom: 20px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 50px;
    height: 4px;
    background-color: #47b3ff;
  }
`;

export const SearchBar = styled.input`
  width: 30%;
  padding: 15px;
  margin-bottom: 30px;
  border: 1px solid #333;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
  font-size: 16px;
  background: #2a2a2a;
  color: #e0e0e0;

  &:focus {
    outline: none;
    border-color: #47b3ff;
    box-shadow: 0 0 1px rgba(71, 179, 255, 0.5);
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 25px;
  line-height: 1.8;
  color: #b0b0b0;
`;

export const ContentCard = styled.div`
  background: #1e1e1e;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.1);
  margin-bottom: 40px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(255, 255, 255, 0.2);
  }
`;
