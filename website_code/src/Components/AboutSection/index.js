import React, { useState } from 'react'
import { AboutContainer, Sidebar, SidebarItem, SidebarList, SidebarLink, Content, ContentItem,AboutHeading , TeamDiv , MemberDetails ,TeamGrid} from './AboutElements'
import arduino from '../../Images/arduino.png'
import Amogh from '../../Images/amogh2.jpg'
import Ananyo from '../../Images/ananyo.jpg'
import Abhay from '../../Images/abhay.jpg'
import Anshu from '../../Images/anshu.jpg'

function About() {
  const [activeContent, setActiveContent] = useState('overview');

  return (
    <div>
      <AboutHeading><h1>About</h1></AboutHeading>
      <AboutContainer>
        <Sidebar>
          <SidebarList>
            <SidebarItem>
              <SidebarLink onClick={() => setActiveContent('overview')}>
                Overview
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink onClick={() => setActiveContent('key-features')}>
                Key Features
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink onClick={() => setActiveContent('challenges')}>
                Challenges
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink onClick={() => setActiveContent('team')}>
                Team
              </SidebarLink>
            </SidebarItem>
          </SidebarList>
        </Sidebar>
        <Content>
          <ContentItem active={activeContent === 'overview'}>
            <h1>Overview</h1>
            <br/>
            <h3>What is it?</h3><br/>
            <img src={arduino} style={{width: '300px', height: '300px', float: 'right', marginLeft: '20px', borderRadius: '30px'}}></img>
<p style={{fontSize: '22px'}}>"Our project is a Bluetooth-controlled car that can be operated remotely via a custom-built mobile app. It is designed to demonstrate innovative control mechanisms, including real-time command execution and advanced safety features."</p><br/><br/>
<h3>Purpose/Objective:</h3><br/>
<p style={{fontSize: '22px'}}>"This project was developed as a part of a hackathon challenge to create a smart, controllable vehicle that can navigate and respond to various commands, showcasing the potential of IoT in personal and industrial applications and create a vehicle model that would aim to serve a more safe and efficient driving experience."</p>
          </ContentItem>
          <ContentItem active={activeContent === 'key-features'}>
            <h1>Key Features</h1><br/>
            <h3>Remote Control via Bluetooth:</h3><br/>
            <p style={{fontSize: '22px'}}>"The car can be controlled from any Bluetooth-enabled device, allowing for real-time movement commands, such as forward, backward, left, and right turns."</p>
            <br/>
            <h3>Emergency Stop and Safe Mode:</h3><br/>
            <p style={{fontSize: '22px'}}>"The car is equipped with an emergency stop feature that automatically activates safe mode in case of obstacles or critical commands, ensuring user safety and vehicle integrity."</p>
            <br/>
            <h3>Face Detection Unlock:</h3>
            <br/>
            <p style={{fontSize: '22px'}}>"We’ve integrated a face detection feature that unlocks the car, adding an extra layer of security. This can be operated via the mobile camera or a connected PC."</p>
            <br/>
            <h3>Customizable Control Panel:</h3>
            <br/>
            <p style={{fontSize: '22px'}}>"We’ve integrated a face detection feature that unlocks the car, adding an extra layer of security. This can be operated via the mobile camera or a connected PC."</p>
            <br/>
          </ContentItem>
          <ContentItem active={activeContent === 'challenges'}>
            <h1>Challenges faced</h1><br/>
            <h3>Development Challenges:</h3><br/>
            <p style={{fontSize: '22px'}}>Throughout the development process, we encountered challenges such as optimizing Bluetooth communication latency and integrating the face detection feature. These obstacles were overcome through iterative testing and collaborative problem-solving.</p><br/>
            <h3>What We Learned</h3><br/>
            <p style={{fontSize: '22px'}}>This project has deepened our understanding of IoT systems, real-time communication protocols, and mobile application development. It also enhanced our ability to work under pressure and deliver a functional product within a limited time frame</p>
          </ContentItem>
          <ContentItem active={activeContent === 'team'}>
            <h1>Team</h1><br/>
            <h3>Team Members:</h3><br/>
            <TeamGrid>
            <TeamDiv>
              <img src={Amogh} style={{width: '200px' , borderRadius: '130px', }}></img>
              <MemberDetails>
                <h3 style={{marginLeft: '20px'}}>Amogh Dandotiya</h3><br/>
                <ul style={{marginLeft : '40px'}}>
                  <li>Website Development</li>
                  <li>Presentation</li>
                </ul>
              </MemberDetails>
            </TeamDiv>
            <TeamDiv>
              <img src={Anshu} style={{width: '200px' , borderRadius: '100px', }}></img>
              <MemberDetails>
                <h3 style={{marginLeft: '20px'}}>Anshu Kumar</h3><br/>
                <ul style={{marginLeft : '40px'}}>
                  <li>Arduino Programming</li>
                  <li>Hardware</li>
                  <li>App Development</li>
                </ul>
              </MemberDetails>
            </TeamDiv>
            <TeamDiv>
              <img src={Ananyo} style={{width: '200px' , borderRadius: '120px', marginBottom: '10px' }}></img>
              <MemberDetails>
                <h3 style={{marginLeft: '20px'}}>Ananyo Hoque</h3><br/>
                <ul style={{marginLeft : '40px'}}>
                  <li>Bluetooth App Development</li>
                  <li>Hardware</li>
                </ul>
              </MemberDetails>
            </TeamDiv>
            <TeamDiv>
              <img src={Abhay} style={{width: '200px' , borderRadius: '100px', }}></img>
              <MemberDetails>
                <h3 style={{marginLeft: '20px'}}>Abhay Chandra</h3><br/>
                <ul style={{marginLeft : '40px'}}>
                  <li>Website Development</li>
                  <li>Presentation</li>
                </ul>
              </MemberDetails>
            </TeamDiv>
            </TeamGrid>
          </ContentItem>
        </Content>
      </AboutContainer>
    </div>
  )
}

export default About;
