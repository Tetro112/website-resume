import React from 'react'
import GitActivity from './GitActivity'
import {
    GhActivity,
    UpdatesContainer,
    UpdatesTitle,
} from './UpdatesElements'
const Updates = () => {

    return (
        <>
            <UpdatesContainer>
                <UpdatesTitle>Github Activity</UpdatesTitle>
                <GhActivity/>
            </UpdatesContainer>
        </>
    )
}

export default Updates
