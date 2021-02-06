import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
//Constants
const primary = "#202034";
const secondary = "#E59A6F";

export const UpdatesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.5fr 8fr;
  background: #e59a6f;
  width: 100%;
  justify-content: center;
  height: ${window.innerHeight - 80}px;
`;

export const UpdatesTitle = styled.h1`
  color: ${primary};
  font-size: max(30px, 5vw);
  justify-self: center;
  height: 5%;
  margin-top: 1%;
  margin-bottom: 2%;
`;

//Github activity components
export const GitActivityContainer = styled.div`
  width: 70%;
  justify-self: center;
`;

//Header components
export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background: ${primary};
  place-items: center;
  border-radius: 6px;
  position: relative;
  z-index: 1;
`;

export const ProfileName = styled.h2`
  margin-left: 2%;
  padding: 2%;
  border-radius: 10px;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    background: #505065;
  }
`;
export const ProfilelNameLink = styled.a`
  text-decoration: none;
  color: ${secondary};
`;

export const GithubLogo = styled(FaGithub)`
  width: auto;
  height: 90%;
  margin-left: auto;
  margin-right: 2%;
  border-radius: 100%;
  color: ${secondary};
`;
export const ProfilePic = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 5px;
`;

export const ProfilelLink = styled.a`
  width: 80px;
  height: 80px;
  margin-left: 1%;
`;

//Body components
export const Body = styled.div`
  width: 100%;
  height: 500px;
  background: #303045;
  position: relative;
  top: -5px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
    background: #000015;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d58a5f;
    border-radius: 5px;
    border: 1px solid ${primary};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #d58a5f;
  }
`;

export const EventContainer = styled.ul`
  margin-top: 5px;
  height: 100%;
`;

export const Event = styled.li`
  height: 20%;
  display: flex;
  align-items: center;
  background: #303045;
`;

export const EventIcon = styled.div`
  margin-left: 2%;
  transform: scale(2);
  color: ${secondary};
`;

export const EventUserName = styled.h3`
  margin-left: 5%;
  position: relative;
  top: 1px;
`;
export const EventNameLink = styled.a`
  text-decoration: none;
  color: ${secondary};
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #c57a4f;
  }
`;
export const EventAction = styled.h3`
  margin-left: 1%;
  color: ${secondary};
`;
