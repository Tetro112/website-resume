import React, { useState } from "react";
import Logo from "./NavLogo.svg";
import Bars from "./Bars.svg";
import { navLinks } from "./navLinks";
import {
  NavContainer,
  NavLinks,
  NavLogo,
  NavLinksContainer,
  StyledBars,
  NavMobileContainer,
  NavLinksAnchor,
} from "./NavElements";
import "./Navbar.css";

export const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  function handleBarsClick() {
    setIsClicked(!isClicked);
  }

  return (
    <>
      <div className="NavWrapper">
        <NavContainer>
          <NavLogo
            src={Logo}
            alt="Nav Logo"
            className="nav-logo"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          />

          <NavLinksContainer className="nav-links-container">
            {navLinks.map((item, index) => {
              return (
                <NavLinks className="nav-links" key={index}>
                  <NavLinksAnchor href={item.url}>{item.title}</NavLinksAnchor>
                </NavLinks>
              );
            })}
          </NavLinksContainer>

          <StyledBars onClick={handleBarsClick}>
            <img src={Bars} alt="Bars" />
          </StyledBars>
        </NavContainer>

        <div className="NavMobile">{isClicked && <NavMobileContainer />}</div>
      </div>
    </>
  );
};
