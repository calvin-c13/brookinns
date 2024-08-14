import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Chapin = () => {
    const side = 'West';
    const community = 'Chapin apartments';
    const hall = 'Chapin';

    return (
        <div>
            <h1>{`Add a review for ${hall} Hall`}</h1>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Chapin;