import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Hamilton = () => {
    const side = 'West';
    const community = 'Kelly';
    const hall = 'Hamilton';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Hamilton;