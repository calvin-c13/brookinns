import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const WestB = () => {
    const side = 'West';
    const community = 'West apartments';
    const hall = 'West B';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default WestB;