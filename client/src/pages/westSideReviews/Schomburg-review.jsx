import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Schomburg = () => {
    const side = 'West';
    const community = 'Schomburg apartments';
    const hall = 'Schomburg';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Schomburg;