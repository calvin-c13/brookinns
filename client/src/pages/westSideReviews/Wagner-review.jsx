import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Wagner = () => {
    const side = 'West';
    const community = 'Roosevelt';
    const hall = 'Wagner';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Wagner;