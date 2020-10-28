import React from 'react'
import * as styles from './StylesProfiles'

const Profiles=(props)=> {
    return (
        <styles.Container>
            <styles.Title>Who's watching?</styles.Title>
            <styles.List>
                <styles.Item onClick={props.click}>
                    <styles.Picture src={props.photoURL ? `/assets/images/users/${props.photoURL}.png` : `/assets/images/misc/loading.gif` }/>
                    <styles.Name>{props.displayName}</styles.Name>
                </styles.Item>
            </styles.List>
        </styles.Container>
    )
}

export default Profiles
