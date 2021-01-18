import React from 'react'
import {
    Header,
} from '../UpdatesElements.js'
import {
    GithubLogo,
    ProfileName,
    ProfilePic,
    ProfilelLink,
    ProfilelNameLink,
    GitActivityContainer,
} from '../UpdatesElements'
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
        </GitActivityContainer>
    )
}

export default GitActivity
