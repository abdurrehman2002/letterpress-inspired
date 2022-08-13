import react from 'react'
import Banner from '../components/Banner';
import Celebrity from '../components/Celebrity';
import ExclusiveNews from '../components/ExclusiveNews';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HotTopic from '../components/HotTopic';
import LatestVedios from '../components/LatestVedios';
import NewMusic from '../components/NewMusic';
import RegistrationForm from '../components/RegistrationForm';
import Reviews from '../components/Reviews';
import TodayNews from '../components/TodayNews';

const Home = () =>{
    return(
        <div className='BodyWrapper'>
            <Header/>
            <Banner />
            <ExclusiveNews />
            <HotTopic/>
            <LatestVedios/>
            <NewMusic/>
            <TodayNews/>
            <Celebrity/>
            <Reviews/>
            <RegistrationForm/>
            <Footer/>
        </div>
    )
}
export default Home;