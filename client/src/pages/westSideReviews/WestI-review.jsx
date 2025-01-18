import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const WestI = () => {
    const side = 'West';
    const community = 'West apartments';
    const hall = 'West I';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default WestI;