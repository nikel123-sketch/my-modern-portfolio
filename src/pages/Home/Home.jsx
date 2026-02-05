import React from 'react';
import Banner from '../../component/HomeComponent/Banner';
import Overview from '../../component/Overview';
import MySkills from '../../component/HomeComponent/MySkills';
import Contact from '../All pages/Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Overview></Overview>
            <MySkills></MySkills>
            <Contact></Contact>
        </div>
    );
};

export default Home;