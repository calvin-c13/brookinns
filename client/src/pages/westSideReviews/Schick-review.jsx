import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Schick = () => {
    const side = 'West';
    const community = 'Kelly';
    const hall = 'Schick';

    return (
        <div>
            <h1>{`Add a review for ${hall} Hall`}</h1>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Schick;