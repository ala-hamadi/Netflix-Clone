import React from 'react'
import jumboData from './jumbo.json'
import * as styles from './StylesJumbo'

const Jumbo=()=> {
    return (
        <styles.Container>
            {
                jumboData.map(data=>(
                    <styles.Item key={data.id} >
                        <styles.Inner direction={data.direction}>
                            <styles.Pane>
                                <styles.Title>{data.title}</styles.Title>
                                <styles.SubTitle>{data.subTitle}</styles.SubTitle>
                            </styles.Pane>
                            <styles.Pane>
                                <styles.Image src={data.image} alt={data.alt} />
                                {data.video ?<styles.Video autoPlay playsInlin muted loop top={data.top} left={data.left} width={data.width} height={data.height}><source src={data.video} type="video/mp4"/></styles.Video> : null}
                            </styles.Pane>
                        </styles.Inner>
                    </styles.Item>
                ))
            }
        </styles.Container>
    )
}

export default Jumbo