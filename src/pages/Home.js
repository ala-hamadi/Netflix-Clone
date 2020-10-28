import React from 'react'
import HomeHeader from '../components/header/HomeHeader'
import Jumbo from '../components/jumbo/Jumbo'
import Faqs from '../components/faqs/Faqs'
import Footer from '../components/footer/Footer'
const Home=()=> {
    return (
        <React.Fragment>
            <HomeHeader />
            <Jumbo />
            <Faqs />
            <Footer />
        </React.Fragment>
    )
}
export default Home