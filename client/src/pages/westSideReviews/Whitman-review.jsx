import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Whitman = () => {
    const side = 'West';
    const community = 'Roth';
    const hall = 'Whitman';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Whitman;