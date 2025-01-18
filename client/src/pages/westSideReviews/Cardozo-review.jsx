import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Cardozo = () => {
    const side = 'West';
    const community = 'Roth';
    const hall = 'Cardozo';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};

export default Cardozo;