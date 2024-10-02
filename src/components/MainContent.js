import React from 'react';
import './style/MainContent.css';
import ImageSlider from "./ImageSlider";
import Img1 from '../assets/image6.jpg';
import Img2 from '../assets/image7.jpg';
import Img3 from '../assets/image8.jpg';
import Img4 from '../assets/image4.jpg';
import Img5 from '../assets/image5.jpg';
import Img6 from '../assets/image9.jpg';
import Img7 from '../assets/image10.jpg';
import Img8 from '../assets/image11.jpg';

import BackgroundImageText from "./BackgroundImageText";

const MainContent = () => {
    const images = [
        Img1,
        Img2,
        Img3,
        Img4,
        Img5,
        Img6,
        Img7,
        Img8,
    ];

    return (
        <div className="main-content">
            <div className="image-slider">
                <ImageSlider images={images} />
            </div>
            <div className="background-image-text">
                <BackgroundImageText />
            </div>
        </div>
    );
};

export default MainContent;
