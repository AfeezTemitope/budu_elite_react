import React, { useState, useEffect } from 'react';
import './style/ImageSlider.css';

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 2000);
        return () => clearInterval(interval);
    }, [images.length]);

    if (!images || images.length === 0) {
        return <div>No images available</div>;
    }

    return (
        <div className="slider">
            <button className="arrow left" onClick={prevSlide}>❮</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slide" />
            <button className="arrow right" onClick={nextSlide}>❯</button>
        </div>
    );
};

ImageSlider.defaultProps = {
    images: [],
};

export default ImageSlider;
