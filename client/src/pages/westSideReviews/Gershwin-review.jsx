import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Gershwin = () => {
    const side = 'West';
    const community = 'Roth';
    const hall = 'Gershwin';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Gershwin;