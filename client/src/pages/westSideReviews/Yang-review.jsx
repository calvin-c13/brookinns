import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Yang = () => {
    const side = 'West';
    const community = 'Living learning';
    const hall = 'Yang';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Yang;
