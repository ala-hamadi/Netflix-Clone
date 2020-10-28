import React from 'react'
import * as styles from './StylesLoading'
const Loading=(props)=> {
    return (
        <styles.Spinner>
            <styles.LockBody />
            <styles.Picture src={`/assets/images/users/${props.user.photoURL}.png`} />
        </styles.Spinner>
    )
}

export default Loading
