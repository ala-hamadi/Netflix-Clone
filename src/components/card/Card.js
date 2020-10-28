import React,{useState,useEffect} from 'react'
import PlayerCard from './PlayerCard'
import * as styles from './StylesCard'

const Card=(props)=> {
    const [itemFeature, setItemFeature] = useState([{}]);
    const [toogleShow, setToogleShow] = useState([false,false,false,false,false]);

    
    useEffect(() => {
        setToogleShow([false,false,false,false,false])
    }, [props.category])

    const handleClickCard=(index)=>{
        let items=[false,false,false,false,false]
        items[index]=true
        setToogleShow(items)
    }
    const handleCloseCard=()=>{
        setToogleShow([false,false,false,false,false])
    }
        
    return (
        <styles.Group>
            {
                props.slideRows.map((slideItem,index)=>{
                    return(
                        <styles.Container key={`${slideItem.title}-${slideItem.id}`}>
                            <styles.Title>{slideItem.title}</styles.Title>
                            <styles.Entities>
                                {slideItem.data.map(item=>(
                                    <styles.Item 
                                        key={item.docId} 
                                        item={item} 
                                        onClick={() => {
                                        setItemFeature(item)
                                        handleClickCard(index);
                                        }}
                                    >
                                        <styles.Image src={`/assets/images/${props.category}/${item.genre}/${item.slug}/small.jpg`} />
                                        <styles.Meta>
                                            <styles.SubTitle>{item.title}</styles.SubTitle>
                                            <styles.Text>{item.description}</styles.Text>
                                        </styles.Meta>
                                    </styles.Item>
                                ))}
                            </styles.Entities>
                            {toogleShow[index] ?
                             
                                (<styles.Feature src={`/assets/images/${props.category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
                                    <styles.Content>
                                        <styles.FeatureTitle>{itemFeature.title}</styles.FeatureTitle>
                                        <styles.FeatureText>{itemFeature.description}</styles.FeatureText>
                                        <styles.FeatureClose onClick={() => handleCloseCard(index)}>
                                        <img src="/assets/images/icons/close.png" alt="Close" />
                                        </styles.FeatureClose>

                                        <styles.Group margin="30px 0" flexDirection="row" alignItems="center">
                                            <styles.Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</styles.Maturity>
                                            <styles.FeatureText fontWeight="bold">
                                                {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                                            </styles.FeatureText>
                                        </styles.Group>
                                        <PlayerCard />
                                    </styles.Content>
                                </styles.Feature>
                               
                                )
                            : null
                        }
                        
                        </styles.Container>
                    )
                })
            }
        </styles.Group>
    )
}

export default Card;
