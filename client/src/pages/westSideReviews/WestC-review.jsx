import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const WestC = () => {
    const side = 'West';
    const community = 'West apartments';
    const hall = 'West C';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default WestC;