import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Keller = () => {
    const side = 'West';
    const community = 'Roosevelt';
    const hall = 'Keller';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Keller;