import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Eisenhower = () => {
    const side = 'West';
    const community = 'Kelly';
    const hall = 'Eisenhower';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Eisenhower;