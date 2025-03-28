import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import WhatsAppButton from '../components/WhatsappButton';
import NavBar from '../components/Navbar/NavBar';
import UnderConstruction from '../components/underconstruction/UnderConstruction';


const Home = () => {
    return (
        <>  
        <UnderConstruction/>
            <NavBar />
            <Hero />
            <WhatsAppButton/>
            <Intro />
            <Services />
            <Portfolio />
            {/* <Clients /> */}
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

