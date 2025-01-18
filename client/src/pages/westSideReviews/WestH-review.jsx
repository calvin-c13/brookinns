import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const WestH = () => {
    const side = 'West';
    const community = 'West apartments';
    const hall = 'West H';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default WestH;