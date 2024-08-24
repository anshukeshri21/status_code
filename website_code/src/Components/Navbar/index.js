import React from 'react';
import { Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavBtn,NavBtnLink, GitImg,NavLinks, GlobalStyle,BtnText} from './NavbarElements';
import Logo from '../../Images/ace2.jpg'
import Git from '../../Images/github.png'
import { FaBars } from 'react-icons/fa';

function Navbar({isOpen , toggle}) {
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <img src={Logo} alt='Ace' />
          </NavLogo>
          <MobileIcon isOpen = {isOpen} onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home" smooth = {true} duration={500} spy = {true} exact = "true">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about" smooth = {true} duration={500} spy = {true} exact = "true" offset={-80}>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="details" smooth = {true} duration={500} spy = {true} exact = "true" offset={-80}>Details</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="manual" smooth = {true} duration={500} spy = {true} exact = "true" offset={-80}>Manual</NavLinks>
            </NavItem>
          </NavMenu>
            <NavBtn >
              <NavBtnLink to = "/Github">
                <GitImg src={Git}>
                </GitImg>
                <BtnText>
                  Source Code
                </BtnText>
              </NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </div>
  )
}

export default Navbar;
