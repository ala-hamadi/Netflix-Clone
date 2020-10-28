import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import * as styles from './StylesPlayerCard'

const PlayerCard=(props)=> {
    const [showPlayer,setShowPlayer]=useState(false)
    return (
            <styles.Container>
                <styles.Button onClick={()=>setShowPlayer((showPlayer)=>!showPlayer)}>Play </styles.Button>
                {
                    showPlayer ? ReactDOM.createPortal(
                        <styles.Overlay onClick={()=>setShowPlayer(false)}>
                            <styles.Inner>
                                <video controls>
                                    <source src="/assets/videos/video.mp4"/>
                                </video>
                                <styles.Close />
                            </styles.Inner>
                        </styles.Overlay>,
                        document.body
                    ):null
                }
            </styles.Container>
    )
}

export default PlayerCard;