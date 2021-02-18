import styled, { keyframes } from "styled-components";
import Item from "./Item";

const bounce = keyframes`
  0% {
    transform: translateY(0px)
  }
  100% {
    transform: translateY(-10px)
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
  animation: ${bounce} 2s ease-in-out infinite alternate;

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
export const ItemButton = styled.button`
  width: 100%;
  height: 80px;
  background: #e59a6f;
  border: none;
  border-radius: 5px;
  outline: none;
`;

export const ItemTitle = styled.h2`
  color: #000015;
  padding: 0;
  margin: 0;
  width: fit-content;
`;

export const ItemLink = styled.a`
  text-decoration: none;
  padding: 0;
`;

export const ItemContent = styled.div`
  background: #d58a5f;
`;

export const ItemDescription = styled.h4``;

export const LogoContainer = styled.div``;
