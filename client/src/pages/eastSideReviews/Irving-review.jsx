import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Irving = () => {
    const side = 'East';
    const community = 'Mendelsohn';
    const hall = 'Irving';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Irving;
