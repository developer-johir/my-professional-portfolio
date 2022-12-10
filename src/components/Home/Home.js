import React from 'react';
import Navbar from '../../Share/Navbar/Navbar';
import AboutSection from '../AboutSection/AboutSection';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AboutSection></AboutSection>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;