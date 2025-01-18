import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const WestE = () => {
    const side = 'West';
    const community = 'West apartments';
    const hall = 'West E';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default WestE;