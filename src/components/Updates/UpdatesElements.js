import styled from 'styled-components'
import GitActivity from './GitActivity'
import Header from './Header'

export const UpdatesContainer = styled.div`
  display: grid;
  grid-template-columns:1fr;
  background: #E59A6F;
  width: 100%;
  justify-content: center;
`

export const UpdatesTitle = styled.h1`
  color: #000015;
  font-size: 4vw;
  justify-self: center;
  grid-column: 2/3;

`

// Github activity feed components

export const GhActivity = styled(GitActivity)`
  
`
// Github Header components
export const GhHeader = styled(Header)`
  display: flex;
  flex-wrap: wrap;
`

export const GhProfilePic = styled.img`
  width: 100%;
  height: auto;


`
export const GhName = styled.h1`
  
`
export const GhLink = styled.a`
  width: 5vw;
  height: auto;
  place-items: center;
`

// Github Body components

//Github Footer components