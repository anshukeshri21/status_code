import styled from "styled-components";
import {MdKeyboardArrowRight , MdArrowForward} from 'react-icons/md'
import { typing,blinkCaret } from "../animations";


export const HeroSectionContainer = styled.div`
  background-color: #2d3436;
  background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 0 0 0 50px;
  height: 800px;
  position: relative;
  z-index: 2;

`;

export const HeroBg = styled.div`
  positon: absolute;
  top:0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #0d0d0c;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #0d0d0c;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width 1200px;
  Position: absolute;
  padding: 8px 24px;
  disply: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: space-between;
  padding-top: 70px;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: left;
  font-family: monospace; 
  white-space: nowrap; 
  overflow: hidden; 
  animation: ${typing} 1s steps(22) forwards, ${blinkCaret} 0.75s step-end infinite;
  
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: left;
  max-width: 600px;
  font-family: monospace;
  white-space: nowrap; 
  overflow: visible;
  padding-top : 30px; 
  animation: ${typing} 3s steps(22) forwards, ${blinkCaret} 0.75s step-end infinite;

  @media screen and (max-width: 768px){
    font-size: 24px;
  }

  @media screen and (max-width: 480px){
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  font-family: monospace;
  flex-direction: column;
  align-items: center ;
  padding-bottom: 200px;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;