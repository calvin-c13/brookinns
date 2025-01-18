import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Chavez = () => {
    const side = 'East';
    const community = 'Living learning';
    const hall = 'Chavez';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Chavez;
