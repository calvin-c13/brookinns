import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const WestG = () => {
    const side = 'West';
    const community = 'West apartments';
    const hall = 'West G';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default WestG;