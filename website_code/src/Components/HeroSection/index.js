import React, {useState} from 'react'
import { HeroSectionContainer, HeroBg, VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight } from './HeroSectionElements';
import Video from '../../Videos/carBg.mp4';
import { Button } from '../ButtonElement';

function HeroSection() {
  const [hover , setHover] = useState(false)

  const onHover = () =>{
    setHover(!hover)
  }

  return (
    <div>
      <HeroSectionContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type ='video/mp4'/>
        </HeroBg>
        <HeroContent>
          <HeroBtnWrapper>
            <Button to='About' onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary = 'true' dark = 'true'>
              Explore {hover ? <ArrowForward/> : <ArrowRight/>}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroSectionContainer>
    </div>
  )
}

export default HeroSection;
