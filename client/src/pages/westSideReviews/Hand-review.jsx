import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Hand = () => {
    const side = 'West';
    const community = 'Tabler';
    const hall = 'Hand';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Hand;