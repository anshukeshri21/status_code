import { keyframes } from 'styled-components';

export const typing = keyframes`
  from { width: 0; }
  to { width: 20ch; } /* Adjust this to match your text length */
`;

export const blinkCaret = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: white; } /* Change this to match your text color */
`;

export const leftslide = keyframes`
  0%
  {
    opacity: 0;
    transform: translateX(-100%);
  }

  100%
  {
    opacity: 1;
    tranform: translateX(0%);
  }
`;

export const appear = keyframes`
  0%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`
