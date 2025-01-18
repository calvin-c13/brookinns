import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Tubman = () => {
    const side = 'East';
    const community = 'Living learning';
    const hall = 'Tubman';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Tubman;
