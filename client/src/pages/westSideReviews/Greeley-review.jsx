import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Greeley = () => {
    const side = 'West';
    const community = 'Roosevelt';
    const hall = 'Greeley';

    return (
        <div>
            <h1>{`Add a review for ${hall} Hall`}</h1>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Greeley;