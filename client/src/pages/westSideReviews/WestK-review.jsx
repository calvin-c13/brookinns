import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const WestK = () => {
    const side = 'West';
    const community = 'West apartments';
    const hall = 'West K';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default WestK;