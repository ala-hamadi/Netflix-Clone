import React, { useState,useEffect } from 'react'
import * as styles from './StylesHeader'
import Fuse from 'fuse.js'
import {Link} from 'react-router-dom'
const BrowseHeader=(props)=> {
    const [searchActive,setSearchActive]=useState(false);
    const [searchTerm,setSearchTerm]=useState('')

    const handleSeachTerm=(e)=>{
        setSearchTerm(e.target.value)
    }

    const handleSignOut=()=>{
        props.firebase.auth().signOut()
    }

    useEffect(() => {
        const fuse = new Fuse(props.slideRows, { keys: ['data.title', 'data.genre'] });
        const results = fuse.search(searchTerm).map(({ item }) => item);
    
        if (props.slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
          props.setSlideRows(results);
        } else {
          props.setSlideRows(null);
        }
      }, [searchTerm]);

    return (
        <styles.Background src="joker1" dontShowOnSmallViewPort>
            <styles.Container>

                <styles.Group>
                    <Link to="/">
                        <styles.Logo  src="assets/images/logo/logo.svg"/>
                    </Link>
                    <styles.BrowseLink active={props.category ==="series" ? "true" : "false"} onClick={()=>{props.clickSeries();setSearchTerm("")}}>Series</styles.BrowseLink>
                    <styles.BrowseLink active={props.category ==="films" ? "true" : "false"} onClick={()=>{props.clickFilms();setSearchTerm("")}}>Movies</styles.BrowseLink>
                </styles.Group>

                <styles.Group>
                    <styles.Search>
                        <styles.SearchIcon onClick={()=>setSearchActive(!searchActive)}>
                            <img src="/assets/images/icons/search.png" alt="Search" />
                        </styles.SearchIcon>
                        <styles.SearchInput
                            value={searchTerm}
                            onChange={handleSeachTerm}
                            placeholder="Search films and series"
                            active={searchActive}
                        />
                    </styles.Search>
                    <styles.Profile>
                        <styles.Picture src={props.photoURL} />
                        <styles.Dropdown>

                            <styles.Group>
                            <styles.Picture src={props.photoURL} />
                            <styles.BrowseLink>{props.displayName}</styles.BrowseLink>
                            </styles.Group>

                            <styles.Group>
                                <styles.BrowseLink onClick={handleSignOut}>Sign out</styles.BrowseLink>
                            </styles.Group>
                            
                        </styles.Dropdown>
                    </styles.Profile>
                </styles.Group>

            </styles.Container>  
            <styles.FeatureBrowseContainer>
                <styles.FeatureBrowseCallOut>Watch Joker Now</styles.FeatureBrowseCallOut>
                <styles.FeatureBrowseText>
                    Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                    City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                    futile attempt to feel like he's part of the world around him.
                </styles.FeatureBrowseText>
                <styles.PlayButton>Play</styles.PlayButton>
            </styles.FeatureBrowseContainer> 
        </styles.Background>
    )
}

export default BrowseHeader
