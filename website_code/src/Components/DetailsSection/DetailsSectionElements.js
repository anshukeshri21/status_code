import styled from "styled-components";

export const CardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;  /* Increased gap between grid items */
  padding: 50px;  /* Increased padding around the grid */
  background: linear-gradient(135deg, #2c2c34, #1a1a1f);
  border-radius: 20px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.85);
  color: #f0f0f0;
  padding: 20px;
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 2;

  @media (max-width: 480px) {
    padding: 15px;
    font-size: 0.9rem;
  }
`;

export const Card = styled.div`
  cursor: pointer;
  position: relative;
  background-color: #1e1e24;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 300px;  /* Increased height of each card */

  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
  }

  &:hover ${InfoOverlay} {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardImage = styled.div`
  background-size: cover;
  background-position: center;
  height: 100%;
  filter: brightness(0.9);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const CardContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f0f0f0;
  font-size: 1.5rem;
  text-align: center;
  padding: 30px;  /* Increased padding for more spacious content */
  background: rgba(0, 0, 0, 0.6);
  border-radius: 15px;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const CardIcon = styled.img`
  width: 70px;  /* Increased icon size */
  height: 70px;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;
