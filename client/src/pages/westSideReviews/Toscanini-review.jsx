import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Toscanini = () => {
    const side = 'West';
    const community = 'Tabler';
    const hall = 'Toscanini';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Toscanini;