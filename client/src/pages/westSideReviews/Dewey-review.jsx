import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Dewey = () => {
    const side = 'West';
    const community = 'Kelly';
    const hall = 'Dewey';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Dewey;