import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const WestD = () => {
    const side = 'West';
    const community = 'West apartments';
    const hall = 'West D';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default WestD;