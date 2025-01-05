import React from 'react';
import fullLogoFrontPage from '../assets/logos/fullLogoFrontPage.png';
import backgroundImage from '../assets/logos/homeBackgroundBlur.jpg';

export default function Home() {
    return (
        <div className="home">
        <div className="home__header">
            <img src={fullLogoFrontPage} alt="Full Logo Front Page" />
        </div>
        <div className="home__content">
            <h1>Thank you for your review!</h1>
            <p>
            Your review has been submitted successfully. Thank you for taking the time to share your experience with us.
            </p>
        </div>
        <div className="home__footer">
            <img src={backgroundImage} alt="Background" />
        </div>
        </div>
    );
}
