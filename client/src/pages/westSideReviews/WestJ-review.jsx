import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const WestJ = () => {
    const side = 'West';
    const community = 'West apartments';
    const hall = 'West J';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default WestJ;