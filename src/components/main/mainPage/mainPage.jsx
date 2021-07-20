import React, { useState, useEffect } from 'react';
import './index.css'

function MainPage({ sliderImg, autoPlayTime = 15000 }) {

    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = (slideIndex = currentSlide + 1) => {
        const currentSliderIndex = slideIndex >= sliderImg.length ? 0 : slideIndex
        setCurrentSlide(currentSliderIndex)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide()
        }, autoPlayTime)
        return () => clearTimeout(timer)
    }, [currentSlide])

    return (
        <div className="wrp d-flex position-relative" id="main">
            {sliderImg.map(({ slider }, index) =>
                <div key={index} className="bg" style={{ backgroundImage: `url(${slider})`, marginLeft: index === 0 ? `-${currentSlide * 100}%` : 0 }}>
                </div>
            )}
            <svg onClick={() => nextSlide()} width="28" height="11" viewBox="0 0 28 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.48047 1.57881L1 5.32031L7.48047 9.06181L7.48047 1.57881Z" stroke="white" />
                <path d="M6.9985 5.55664L27.707 5.55664" stroke="white" />
            </svg>

            <svg onClick={() => nextSlide()} width="28" height="11" viewBox="0 0 28 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.374 1.57881L26.8545 5.32031L20.374 9.06181L20.374 1.57881Z" stroke="white" />
                <path d="M20.855 5.55664L0.146484 5.55664" stroke="white" />
            </svg>

            <div className="dots">
                {Array(sliderImg.length).fill(1).map((_, i) => <div onClick={() => nextSlide(i)} key={i} className={currentSlide === i ? 'active__dot' : ''}></div>)}
            </div>
        </div>
    );
}

export default MainPage;