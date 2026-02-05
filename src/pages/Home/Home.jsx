import React from 'react';
import Banner from '../../component/HomeComponent/Banner';
import Overview from '../../component/Overview';
import MySkills from '../../component/HomeComponent/MySkills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Overview></Overview>
            <MySkills></MySkills>
        </div>
    );
};

export default Home;