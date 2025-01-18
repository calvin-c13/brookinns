import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Lauterbur = () => {
    const side = 'West';
    const community = 'Living learning';
    const hall = 'Lauterbur';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Lauterbur;
