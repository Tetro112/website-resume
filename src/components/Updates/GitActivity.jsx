import React from 'react'
import {
    GhHeader,
} from './UpdatesElements';

const GitActivity = () => {
    
    
    async function getGitData() {
        const response = await fetch('https://api.github.com/users/Tetro112/events/public');
        const data = await response.json();
        console.log(data);
        return data;
    }
    
    const fullName = 'Vikas Movva';
    const avatarUrl = 'https://avatars.githubusercontent.com/u/65259115?';
    const profileUrl = 'https://github.com/vikas-movva'
    let events = getGitData();
    console.log(events)
    
        
    return (
        <div>
            <GhHeader name={fullName} profilePic={avatarUrl} url={profileUrl} />

        </div>
    )
}

export default GitActivity
