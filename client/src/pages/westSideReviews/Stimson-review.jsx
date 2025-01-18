import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Stimson = () => {
    const side = 'West';
    const community = 'Roosevelt';
    const hall = 'Stimson';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Stimson;