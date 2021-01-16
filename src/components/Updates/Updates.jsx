import React from 'react'
import GitActivity from './GitActivity'
import {
    UpdatesContainer,
    UpdatesTitle,
} from './UpdatesElements'
const Updates = () => {

    return (
        <>
            <UpdatesContainer>
                <UpdatesTitle>Github Activity</UpdatesTitle>
                <GitActivity/>
            </UpdatesContainer>
        </>
    )
}

export default Updates
