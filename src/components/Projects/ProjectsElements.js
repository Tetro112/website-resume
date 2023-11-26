import styled, { keyframes } from "styled-components";
import Item from "./Item";
import { css } from "styled-components";

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ProjectsWrapper = styled.div`
  height: ${window.innerHeight - 80}px;
  background: #000015;
  display: grid;
  grid-template-columns: 3fr 5fr;
  place-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 9fr;
  }
`;

export const ProjectsTitle = styled.h1`
  display: none;
  @media screen and (max-width: 768px) {
    display: initial;
    color: #e59a6f;
    font-size: 350%;
  }
`;

export const ProjectsImage = styled.img`
  width: 90%;
  color: #e59a6f;
  animation: ${slideDown} 2s;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ProjectsContainer = styled.div`
  height: 90%;
  width: 90%;
  background: #303045;
  border-radius: 5px;
  overflow-y: hidden scroll;

  &::-webkit-scrollbar {
    width: 10px;
    background: #d58a5f;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #000015;
    border-radius: 5px;
    border: 1px solid #d58a5f;
    transition: all 0.3s ease-in-out;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #303045;
  }
`;

export const ProjectItem = styled(Item)`
  width: 100%;
  height: 80px;
  background: #e59a6f;
`;
export const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  background: #e59a6f;
  border: none;
  padding-left: 5px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  justify-content: left;
  align-items: center;
  position: relative;
  z-index: 2;
  box-shadow: ${(props) =>
    props.isClicked ? css`0 4px 15px -3px rgba(0, 0, 0, 0.5)` : css`none`};
`;

export const ItemTitle = styled.h2`
  color: #000015;
  padding: 0;
  margin: 0;
  width: fit-content;
  user-select: none;
`;

export const ItemLink = styled.a`
  text-decoration: none;
  padding: 0;
`;

export const ItemContent = styled.div`
  background: #d58a5f;
  margin-top: -5px;
  padding-top: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  animation: ${slideDown} 0.5s ease-out;
  position: relative;
  z-index: 1;
`;

export const ItemDescription = styled.h4``;

export const LogoContainer = styled.div`
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background: #202034;
`;
