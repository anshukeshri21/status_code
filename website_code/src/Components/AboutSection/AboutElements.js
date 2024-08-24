import styled from "styled-components";
import { typing, blinkCaret, leftslide, appear } from "../animations";

export const AboutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(315deg, #1e1e1e 0%, #121212 100%);
  color: #e0e0e0;
`;

export const AboutHeading = styled.h1`
  color: #e0e0e0;
  background: linear-gradient(315deg, #1e1e1e 0%, #121212 100%);
  font-family:  monospace;
  padding: 40px;
  padding-left: 60px;
  font-size: 2rem;
  letter-spacing: 2px;
  border-bottom: 3px solid #47b3ff;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
`;

export const Sidebar = styled.div`
  flex: 1;
  max-width: 250px;
  height: 760px;
  overflow-y: auto;
  background-color: #1e1e1e;
  padding: 20px;
  padding-left: 30px;
  margin-left: 22px;
  border-right: 2px solid #47b3ff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  animation: ${leftslide} 2s;
`;

export const SidebarItem = styled.li`
  margin-bottom: 15px;
`;

export const SidebarLink = styled.a`
  text-decoration: none;
  color: #e0e0e0;
  font-weight: bold;
  display: block;
  cursor: pointer;
  font-size: 1.2rem;
  transition: color 0.3s, text-shadow 0.3s;

  &:hover {
    color: #47b3ff;
    text-shadow: 0 0 10px rgba(71, 179, 255, 0.7);
  }
`;

export const Content = styled.div`
  flex: 3;
  padding: 20px;
  position: relative;
  color: #e0e0e0;
  line-height: 1.6;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
`;

export const ContentItem = styled.div`
  display: ${({ active }) => (active ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 1.5rem;
  right: 0;
  padding-left: 20px;
  opacity: ${({ active }) => (active ? '1' : '0')};
  transition: opacity 0.5s ease;
  animation: ${appear} 3s;
  font-size: 18px;
`;

export const TeamDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const MemberDetails = styled.div`
  flex: 1;
  padding-left: 20px;
  color: #b0bec5;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 35px;
  column-gap: 100px;
  width: 100%;
  max-width: 800px;
  margin: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 50px;
  }
`;
