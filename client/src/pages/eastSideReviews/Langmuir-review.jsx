import React from 'react';
import ReviewForm from '../../components/ReviewForm';

const Langmuir = () => {
    const side = 'East';
    const community = 'H';
    const hall = 'Langmuir';

    return (
        <div>
            <ReviewForm side={side} community={community} hall={hall} />
        </div>
    );
};


export default Langmuir;
