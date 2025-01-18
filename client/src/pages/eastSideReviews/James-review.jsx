import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const James = () => {
    const side = 'East';
    const community = 'H';
    const hall = 'James';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default James;
