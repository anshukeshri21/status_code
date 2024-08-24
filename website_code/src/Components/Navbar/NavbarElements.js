import { Link as LinkR} from 'react-router-dom';
import styled, {createGlobalStyle} from 'styled-components'
import {Link as LinkS} from 'react-scroll'
import Git from '../../Images/github.png'


export const Nav = styled.nav`
  background: black;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  cursor : pointer;
  font-size: 1.5rem;
  align-items : center;
  margin-left: 33px;
`;

export const MobileIcon = styled.div`
  display: none;
  opacity: ${({isOpen}) => (isOpen ? '0' : '100%')};

  @media screen and (max-width: 768px){
    display : block;
    position: absolute;
    top: 16px;
    right: 0;
    transform: translate(-100%,60%);
    font-size ; 1.8rem;
    cursor: pointer;
    color: white;
    width: 33px;
  }

`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px){
    display : none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active{
    border-bottom: 3px solid #4C3BCF; 
  }
  
  &:hover{
    color: #4C3BCF;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  justify-content;
  align-items: center;

  @media screen and (max-width: 768px){
    display: none;

  }
`;

export const NavBtnLink = styled(LinkR)`
  display:flex;
  align-items: center;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: white;
    border-radius: 50px;
    margin-right: 30px;
    white-space: nowrap;
    padding: 1px 1px 1px 1px;
    color: grey; 
    font-size: 16px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
  }
`;

export const GitImg = styled.img`
  width: 35px;
  height: 35px;

`;

export const BtnText = styled.h1`
  opacity: 0%;
  &:hover{
    opacity: 100%;
    background: white;
    border-radius: 50px;
    
    white-space: nowrap;
    padding: 2px 2px 2px 2px;
    color: #4C3BCF ; 
    font-size: 16px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    justify-content: center;
  }
  
`;
