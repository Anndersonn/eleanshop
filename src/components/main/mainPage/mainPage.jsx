import React from 'react';
import './index.css'

function MainPage() {
    return (
        <div className="bg">
            <svg width="28" height="11" viewBox="0 0 28 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.48047 1.57881L1 5.32031L7.48047 9.06181L7.48047 1.57881Z" stroke="white" />
                <path d="M6.9985 5.55664L27.707 5.55664" stroke="white" />
            </svg>

            <svg width="28" height="11" viewBox="0 0 28 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.374 1.57881L26.8545 5.32031L20.374 9.06181L20.374 1.57881Z" stroke="white" />
                <path d="M20.855 5.55664L0.146484 5.55664" stroke="white" />
            </svg>

            <div className="dots">
                <div></div>
                <div></div>
                <div></div>
                <div className="active__dot"></div>
                <div></div>
            </div>
        </div>
    );
}

export default MainPage;