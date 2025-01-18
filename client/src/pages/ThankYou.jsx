import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

export default function ThankYou() {
    const [confettiActive, setConfettiActive] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setConfettiActive(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative py-8 sm:py-10 px-6 sm:px-2 max-w-6xl mx-auto">
            {/* Confetti Animation */}
            {confettiActive && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    recycle={false}
                />
            )}

            <div className="flex flex-col items-center space-y-8">
                <h1 className="text-4xl font-bold text-center">Thank You!</h1>
                <p className="text-slate-700 px-4 sm:px-4 pb-2 leading-relaxed text-center text-lg">
                    Your review has been submitted successfully. Thank you for taking the time to share your experience with us.
                </p>
                <Link
                    to="/"
                    className="bg-red-700 text-white text-center p-3 sm:p-4 uppercase rounded-lg hover:opacity-90 flex items-center space-x-2"
                >
                    <FaHome size={18} />
                    <span>Back to Home</span>
                </Link>
            </div>
        </div>
    );
}