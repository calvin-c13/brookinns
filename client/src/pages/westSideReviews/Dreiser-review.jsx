import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Dreiser = () => {
    const side = 'West';
    const community = 'Tabler';
    const hall = 'Dreiser';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Dreiser;