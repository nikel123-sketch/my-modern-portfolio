import React from 'react';
import Banner from '../../component/HomeComponent/Banner';
import Overview from '../../component/Overview';
import MySkills from '../../component/HomeComponent/MySkills';
import Contact from '../All pages/Contact/Contact';
import Projects from '../All pages/Projects/Projects';
import Experience from '../All pages/Experience/Experience';

const Home = () => {
    return (
      <div >
        <Banner></Banner>
        <Overview></Overview>
        <MySkills></MySkills>
        <Experience></Experience>
        <Projects></Projects>

        <Contact></Contact>
      </div>
    );
};

export default Home;