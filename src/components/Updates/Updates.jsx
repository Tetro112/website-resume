import React from 'react'
import GitActivity from './GitActivity/GitActivity';
import {
    UpdatesContainer,
    UpdatesTitle,
} from './UpdatesElements'
import './Updates.css'
const Updates = () => {
    // get public events from github
    async function getGitData() {
        const response = await fetch('https://api.github.com/users/vikas-movva/events/public');
        const data = await response.json();
        return data;
    }
    //  Github information
    const profilePic = "https://avatars.githubusercontent.com/u/65259115?"
    const profileUrl = 'https://github.com/vikas-movva'
    const profileName = 'Vikas Movva'
    const events = getGitData()


    return (
        <>
            <UpdatesContainer>
                <UpdatesTitle>Github Activity</UpdatesTitle>
                <GitActivity className = 'git-activity' profileUrl={ profileUrl} profilePic={profilePic } profileName={ profileName}/>
            </UpdatesContainer>
        </>
    )
}

export default Updates
