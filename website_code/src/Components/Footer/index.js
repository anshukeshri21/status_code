import React from 'react'
import { FooterContainer , FooterLink } from './FooterElements'
import Ace from '../../Images/ace2.jpg'
function Footer() {
  return (
    <div>
      <FooterContainer style={{paddingTop: '100px'}}>
      <img src={Ace}></img>
        <p>Contact us at: <FooterLink href = 'amoghdandotiya123@gmail.com'>amoghdandotiya123@gmail.com</FooterLink></p>
        <p>Follow us on: <FooterLink>Instagram</FooterLink> | <FooterLink href = '/'> LinkedIn</FooterLink></p><br/>
        <p>Project by: Amogh Dandotiya , Anshu Kumar , Abhay Chandra , Ananyo Hoque</p>
        <p> © 2024 Ace. All rights reserved</p><br/>
        <p>Check out the <FooterLink href = '/'>Source Code</FooterLink>.</p><br/>
        <p>Participating in Status code 1 . Visit the <FooterLink href= 'https://hackathon.iiitkalyani.ac.in/'>Hackathon website</FooterLink>for more details.</p>
      </FooterContainer>
    </div>
  )
}

export default Footer
