import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Oneill = () => {
    const side = 'East';
    const community = 'Mendelsohn';
    const hall = 'Oneill';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Oneill;
