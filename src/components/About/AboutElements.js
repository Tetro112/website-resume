import styled, {keyframes} from 'styled-components';
import AboutPic from './AboutPic.svg'

const fadeIn = keyframes`
  from {
    opacity: 20%;
  }

  to {
    opacity: 100%;
  }
`;

const bounce = keyframes`
  0% {
    transform: translateY(0px)
  }
  100% {
    transform: translateY(-10px)
  }
`;

export const AboutContainer = styled.div`
    height: ${window.innerHeight - 80}px;
    background: #000015;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    z-index: inherit;
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        background: scale(url(${AboutPic}))
    }
`

export const AboutTitle = styled.h1`
    grid-column: 1/2;
    grid-row: 1/2;
    color: #E59A6F;
    align-self: flex-end;
    font-size: min(5rem, 12.5vw);
    justify-self: center;
    text-transform: uppercase;
    text-align: center;
    z-index: inherit;
`

export const AboutText = styled.h5`
    grid-column: 1/2;
    justify-self: center;
    color: #E59A6F;
    font-size: max(1rem, 2vw);
    margin-left: 5%;
    margin-right: 5%;
    z-index: inherit;
`

export const AboutImg = styled.img`
    animation: ${fadeIn} 2s linear;
    z-index: inherit;
    @media screen and (min-width: 768px){
        grid-column: 2/3;
        justify-self: end;
        place-self: center;
    }
    @media screen and (max-width: 768px){
        grid-row: 1/2;
        grid-column: 1/2;
        width: 90vw;
        height: auto;
    }
`

export const AboutTextContainer = styled.div`
    grid-row: 1/2;
    grid-column: 1/2;
    z-index: inherit;
    animation: ${fadeIn} 2s linear, ${bounce} 2s ease-in-out infinite alternate;
    @media screen and (max-width: 768px){
        grid-row: 1/2;
        grid-column: 1/2;
        margin-top: 50%;
    }
`