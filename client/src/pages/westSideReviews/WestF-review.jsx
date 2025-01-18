import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const WestF = () => {
    const side = 'West';
    const community = 'West apartments';
    const hall = 'West F';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default WestF;