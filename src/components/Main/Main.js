import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Sheard/Footer/Footer';
import FooterSliders from '../../Sheard/Footer/FooterSliders';
import Header from '../../Sheard/Header/Header';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet />
            <FooterSliders/>
            <Footer/>
        </div>
    );
};

export default Main;