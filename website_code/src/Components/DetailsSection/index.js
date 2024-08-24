import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import { CardSection, Card, CardImage, CardContent, CardIcon, InfoOverlay } from './DetailsSectionElements';
import Vid1 from '../../Images/vid1.gif';
import Tools from '../../Images/tools.gif';
import Reel from '../../Images/reel.gif';
import Uno from '../../Images/uno.png';
import Anime from '../../Images/animated_vid_bg.jpg';
import Live from '../../Images/live_vid_bg.webp';
import Hard from '../../Images/hard_bg.jpeg';
import Circuit from '../../Images/ckt_bg.jpeg';

function Details() {
  return (
    <div
      style={{
        backgroundColor: '#2d3436',
        backgroundImage: 'linear-gradient(315deg, #2d3436 0%, #000000 74%)',
        paddingTop: '50px'
      }}
    >
      <h1 style={{ color: 'white', fontSize: '50px', paddingTop: '30px', marginLeft: '50px' }}>
        Details
      </h1>
      <br />
      <br />
      <CardSection style={{ backgroundColor: '#0d0d0c' }}>
        {/* Card for Animated Video */}
        <Link to="/animated-video" style={{ textDecoration: 'none' }}>
          <Card>
            <CardImage>
              <img src={Anime} style={{ width: '750px' }} alt="Animated Video" />
            </CardImage>
            <CardContent>
              <CardIcon style={{ borderRadius: '59px' }} src={Vid1} alt="play" />
              <p>Animated Video</p>
            </CardContent>
            <InfoOverlay className="info">
              <p>This card contains an animated video showcasing the project.</p>
            </InfoOverlay>
          </Card>
        </Link>

        {/* Card for Live Demo */}
        <Link to="/live-demo" style={{ textDecoration: 'none' }}>
          <Card>
            <CardImage>
              <img src={Live} style={{ width: '750px' }} alt="Live Demo" />
            </CardImage>
            <CardContent>
              <CardIcon style={{ borderRadius: '59px' }} src={Reel} alt="Reel" />
              <p>Live Demo</p>
            </CardContent>
            <InfoOverlay className="info">
              <p>This card contains a live demo of the project in action.</p>
            </InfoOverlay>
          </Card>
        </Link>

        {/* Card for Hardware Details */}
        <Link to="/hardware-details" style={{ textDecoration: 'none' }}>
          <Card>
            <CardImage>
              <img src={Hard} style={{ width: '730px' }} alt="Hardware Details" />
            </CardImage>
            <CardContent>
              <CardIcon style={{ borderRadius: '59px' }} src={Tools} alt="Tools" />
              <p>Hardware Details</p>
            </CardContent>
            <InfoOverlay className="info">
              <p>This card contains detailed information about the project's Hardware.</p>
            </InfoOverlay>
          </Card>
        </Link>

        {/* Card for Integrated Circuit */}
        <Link to="/integrated-circuit" style={{ textDecoration: 'none' }}>
          <Card>
            <CardImage>
              <img src={Circuit} style={{ width: '730px' }} alt="Integrated Circuit" />
            </CardImage>
            <CardContent>
              <CardIcon style={{ borderRadius: '59px' }} src={Uno} alt="Circuit" />
              <p>Integrated Circuit</p>
            </CardContent>
            <InfoOverlay className="info">
              <p>This card contains details about the integrated circuit used in the project.</p>
            </InfoOverlay>
          </Card>
        </Link>
      </CardSection>
    </div>
  );
}

export default Details;
