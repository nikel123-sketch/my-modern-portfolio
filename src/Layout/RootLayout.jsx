import React from 'react';
import Navber from '../pages/Navber/Navber';
import { Outlet } from 'react-router';
import Footer from '../pages/Footer/Footer';

const RootLayout = () => {
    return (
      <div className="bg-slate-900 min-h-screen flex flex-col text-slate-100 max-w-11/12 mx-auto">
        <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
};

export default RootLayout;