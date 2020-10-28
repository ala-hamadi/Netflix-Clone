import React,{useState,useContext,useEffect} from 'react'
import Profiles from '../components/profiles/Profiles'
import Card from '../components/card/Card'
import Footer from '../components/footer/Footer'
import Loading from '../components/loading/Loading'
import LoadingRelease from '../components/loading/LoadingRelease'
import BrowseHeader from '../components/header/BrowseHeader'
import useContent from '../hooks/useContent'
import selectionMap from '../util/selectionMap'
import FirebaseContext from '../firebase/FirebaseContext'
const Browse=()=> {
    const {firebase}=useContext(FirebaseContext)
    const user=firebase.auth().currentUser || {}
    const [profile,setProfile]=useState({})
    const [loading,setLoading]=useState(true)
    const [category,setCategory]=useState("series")
    const [slideRows,setSlideRows]=useState(null);
    const series = useContent('series')
    const films = useContent('films')
    const slides=selectionMap(series,films)

    useEffect(() => {
        setTimeout(()=>{
            setLoading(false)
        },3000)
    }, [profile.displayName])


    const handleClick=()=>{
        setProfile({displayName:user.displayName,photoURL:user.photoURL})
    }


    const Browse=profile.displayName ?
    loading ?< Loading user={user}/> :(
        <React.Fragment>
            <LoadingRelease />
            <BrowseHeader 
                firebase={firebase}
                displayName={user.displayName} 
                photoURL={user.photoURL} 
                clickSeries={()=>setCategory('series')}
                clickFilms={()=>setCategory('films')}
                category={category} 
                slides={slides}
                slideRows={slides[category]}
                setSlideRows={setSlideRows}
            />
            <Card category={category} slideRows={slideRows ? slideRows : slides[category]}/>
            <Footer />
        </React.Fragment>)
        :(
            <Profiles 
                click={handleClick} 
                photoURL={user.photoURL} 
                displayName={user.displayName}
            />
        )

    return Browse
}

export default Browse
