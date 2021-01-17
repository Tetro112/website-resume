import styled from 'styled-components'
import {FaGithub} from 'react-icons/fa'
//Constants
const primary = '#202034'
const secondary = '#E59A6F'

export const UpdatesContainer = styled.div`
  display: grid;
  grid-template-columns:1fr;
  grid-template-rows: 1.5fr 8fr;
  background: #E59A6F;
  width: 100%;
  justify-content: center;
  height: 50vh;
`

export const UpdatesTitle = styled.h1`
  color: ${primary};
  font-size: max(30px, 5vw);
  justify-self: center;
  height: 5%;
  margin-top: 1%;
  margin-bottom: 2%;
`

//Github activity components

//Header components
export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background: ${primary};
  place-items: center;
  border-radius: 5px; 
`

export const ProfileName = styled.h3`
  margin-left: 2%;
  padding: 2%;
  border-radius: 10px;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover{
    background: #505065;
  }
`
export const ProfilelNameLink = styled.a`
  text-decoration: none;
  color: ${secondary};
`

export const GithubLogo = styled(FaGithub)`
  width: 10%;
  height: auto;
  margin-left: auto;
  margin-right: 2%;
  border-radius: 100%;
`
export const ProfilePic = styled.img`
  width: 80px;
  height: 80px;
`

export const ProfilelLink = styled.a`
  width: 80px;
  height: 80px;
  margin-left: 2%;
`