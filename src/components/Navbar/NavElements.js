import styled from "styled-components";
import MobileContainer from "./MobileContainer";

// Animations

// Components
export const NavContainer = styled.nav`
  background: #000015;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: "Roboto", sans-serif;
  grid-column: 1/4;
  position: sticky;
  top: 0;
`;

export const NavLogo = styled.img`
  margin-left: 10px;
  cursor: pointer;
`;

export const NavLinksContainer = styled.ul`
  display: flex;
  list-style-type: none;
  height: 100%;
  align-items: center;
  margin-left: auto;
  margin-right: 8%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled.li`
  padding: 27px 20px;
  padding-bottom: 25px;
  color: #d0d4d4;
  font-size: 1.3rem;
  width: 160px;
  height: 100%;
  transition: all 0.2s ease-in-out;
  text-align: center;
  &:hover {
    background: #202034;
    border-bottom: 3px solid #ffca9f;
    color: #e59a6f;
  }
`;

export const StyledBars = styled.button`
  display: none;
  border: none;
  background-color: #000015;
  outline: none;
  @media screen and (max-width: 768px) {
    display: block;
    margin-left: auto;
    color: #e59a6f;
    margin-right: 25px;
    transform: scale(1.5);
  }
`;

export const NavMobileContainer = styled(MobileContainer)`
  @media screen and (max-width: 768px) {
    width: 230px;
    height: ${window.outerHeight - 80}px;
    background: #000015;
    justify-self: end;
    margin-inline-start: 0;
  }
`;

export const NavLinksMobileContainer = styled.ul`
  @media screen and (max-width: 768px) {
    display: grid;
    width: 230px;
    height: ${window.innerHeight - 80}px;
    background: #000015;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, 1fr);
    list-style-type: none;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    border-left: 1px solid #202035;
    z-index: 999;
  }
`;

export const NavLinksMobile = styled.li`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    padding: 27px 20px;
    padding-bottom: 25px;
    color: #d0d4d4;
    font-size: 1.3rem;
    width: 100%;
    transition: all 0.2s ease-out;
    justify-content: center;

    &:hover {
      background: #202034;
      color: #e59a6f;
    }
  }
`;

export const NavLinksMobileText = styled.p`
  justify-self: center;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

export const NavLinksAnchor = styled.a`
  text-decoration: none;
  &:link {
  }
  &:visited {
    text-decoration: none;
    color: #ffca9f;
  }
  &:hover {
    color: #bf9777;
  }
`;
