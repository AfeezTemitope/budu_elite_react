import React from'react';
import SideBar from '../components/SideBar';
import MainContent from '../components/MainContent';
import Header from '../components/Header';
import './style/HomePage.css';

const HomePage = () => {
    return(
        <>
        <Header />
        <div className="container">
        <SideBar />
        <MainContent />
      </div>
      </>
    )
}


export default HomePage;