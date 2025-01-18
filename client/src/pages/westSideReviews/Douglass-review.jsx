import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Douglass = () => {
    const side = 'West';
    const community = 'Tabler';
    const hall = 'Douglass';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Douglass;