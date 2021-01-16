import React from 'react'
import {
    AboutContainer,
    AboutImg,
    AboutText,
    AboutTextContainer,
    AboutTitle,
} from './AboutElements'

import AboutPic from "./AboutPic.svg";
import { FaAngular, FaReact, FaVuejs } from "react-icons/fa";

const About = () => {
    return (
        <AboutContainer>
            <AboutImg src={AboutPic} alt='About Pic' />
            <AboutTextContainer>
                <AboutTitle>
                    Hi I'm Vikas
                </AboutTitle>

                <AboutText>
                    I am a first year computer science student studying at Wilfrid Laurier University and have a great passion towards science and technology! I am currently very interested in web development and am learning react.js <FaReact/>, anglular.js <FaAngular/>, and vue.js <FaVuejs/>.
                </AboutText>
            </AboutTextContainer>
            

        </AboutContainer>
    )
}

export default About