import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Mount = () => {
    const side = 'West';
    const community = 'Roth';
    const hall = 'Mount';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Mount;