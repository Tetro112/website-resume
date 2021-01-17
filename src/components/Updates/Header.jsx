import React from 'react'
import {
    GhLink,
    GhProfilePic,
} from './UpdatesElements'

const Header = (props) => {
    return (
        <>
            <GhLink href={props.url}><GhProfilePic src={props.profilePic} alt="Profile"/></GhLink>
            <h1>{props.name}</h1>
        </>
    )
}

export default Header
