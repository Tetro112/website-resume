import React from 'react'

const GitActivity = () => {
    
    
    async function getGitData() {
        const response = await fetch('https://api.github.com/users/Tetro112/events/public');
        const data = await response.json();
        console.log(data);
        return data;
    }
    
    const fullName = 'Vikas Movva';
    const userName = 'Tetro';
    const avatarUrl = 'https://avatars.githubusercontent.com/u/65259115?';
    let events = getGitData();
    console.log(events)
    
        
    return (
        <>
            
        </>
    )
}

export default GitActivity
