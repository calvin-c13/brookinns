import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Ammann = () => {
    const side = 'East';
    const community = 'Mendelsohn';
    const hall = 'Ammann';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Ammann;
