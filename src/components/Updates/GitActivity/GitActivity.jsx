import React from 'react'
import {
    Body,
    Header,
    GithubLogo,
    ProfileName,
    ProfilePic,
    ProfilelLink,
    ProfilelNameLink,
    GitActivityContainer,
    Events,
    EventsContainer,
} from '../UpdatesElements.js'
const GitActivity = (props) => {
    return (
        <GitActivityContainer>
            <Header>
                <ProfilelLink href={props.profileUrl} target="_blank">
                    <ProfilePic src={props.profilePic} />
                </ProfilelLink>

                <ProfileName>
                    <ProfilelNameLink href={props.profileUrl} target="_blank">
                        {props.profileName}
                    </ProfilelNameLink>
                </ProfileName>
                
                <GithubLogo/>
            </Header>
            <Body>
                <EventsContainer>
                    {/* {props.events.map((item, index) => {
                        return(<Events></Events>)
                    })} */}
                </EventsContainer>
            </Body>
        </GitActivityContainer>
    )
}

// props.events.map((item, index) => {
//                             return (<Events key={index}>
//                                 {item.actor.id}
                                
//                             </Events>);
//                         })
export default GitActivity
