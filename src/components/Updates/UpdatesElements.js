import styled from 'styled-components'
import GitActivity from './GitActivity'
import Header from './Header'

export const UpdatesContainer = styled.div`
  display: grid;
  grid-template-columns: 20vw 1fr 20vw;
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
export const GhActivity = styled(GitActivity)`
  grid-column: 2/3;
  grid-row: 2/3;
`

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