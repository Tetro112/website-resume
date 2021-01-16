import React from 'react'
import {
    NavLinksMobileContainer,
    NavLinksMobile,
    NavLinksMobileText,
} from "./NavElements";
import { navLinks } from "./navLinks";

const MobileContainer = () => {
    return (
        <NavLinksMobileContainer>
            {navLinks.map((item, index) => {
                return (<NavLinksMobile className='nav-links' key={index}>
                    <NavLinksMobileText>{ item.icon } {item.title}</NavLinksMobileText>
                    
                </NavLinksMobile>);
            })}      
        </NavLinksMobileContainer>
    )
}

export default MobileContainer
