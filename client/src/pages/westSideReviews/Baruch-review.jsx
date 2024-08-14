import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Baruch = () => {
    const side = 'West';
    const community = 'Kelly';
    const hall = 'Baruch';

    return (
        <div>
            <h1>{`Add a review for ${hall} Hall`}</h1>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Baruch;