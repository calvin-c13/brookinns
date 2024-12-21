import React, { useState } from 'react';
import RequiredAsterisk from './RequiredAsterisk';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const AddReview = ({ side, community, hall }) => {
    const [formData, setFormData] = useState({
        name: '',
        major: '',
        academicStanding: '',
        roomType: 'Double',
        ac: 'No',
        kitchen: 'No',
        overall: '',
        buildingQuality: '',
        buildingAmenities: '',
        location: '',
        socialLife: '',
        managementAndStaff: '',
        wouldRecommend: '',
        reviewText: '',
        side: side,
        community: community,
        hall: hall
    });

    const [error, setError] = useState(false);

    const [descriptions, setDescriptions] = useState({
        overall: '',
        buildingQuality: '',
        buildingAmenities: '',
        location: '',
        socialLife: '',
        managementStaff: '',
    });

    //description of star rating
    const overallDescriptions = {
        1: 'Terrible experience, I wanted to move out immediately.',
        2: 'Not so great, I would not recommend living here.',
        3: 'Average experience, nothing special.',
        4: 'Good, some minor issues but overall a good experience.',
        5: 'Exceptional, there is no place I would rather live.'
    };

    const buildingQualityDescriptions = {
        1: 'Outdated and in need of major repairs, feels neglected.',
        2: 'Functional but still really dirty and depressing.',
        3: 'Average, decent condition, but could be better.',
        4: 'Pretty good, most things are well-maintained.',
        5: 'Top-notch, modern, and comfortable living environment.'
    };

    const buildingAmenitiesDescriptions = {
        1: 'Laundry room, kitchen, and lounge are in poor condition and mostly unusable.',
        2: 'Laundry machines are often broken, kitchen is unclean, and lounge is not inviting.',
        3: 'Amenities work but have minor issues; some areas might be under-maintained.',
        4: 'Amenities are clean and functional for the most part.',
        5: 'All amenities are in excellent condition, greatly improving dorm life.'
    };

    const locationDescriptions = {
        1: 'Far from campus; difficult to get around anywhere.',
        2: 'A decent walk to class, but far from anywhere else.',
        3: 'Average location; decent access to campus and key spots.',
        4: 'Convenient location; close to campus and key spots',
        5: 'Prime location; very close to campus and everything you need'
    };
    

    const socialLifeDescriptions = {
        1: 'No hall activities or events.',
        2: 'Infrequent and poorly organized activities.',
        3: 'Occasional activities for social interaction.',
        4: 'Regular, well-planned activities that encourage participation.',
        5: 'Exceptional variety of engaging activities fostering strong community.'
    };
    
    const managementStaffDescriptions = {
        1: 'Unresponsive and unhelpful RAs and management.',
        2: 'Below average RAs and management, inconsistent support.',
        3: 'Adequate RAs and management, addressing basic concerns.',
        4: 'Attentive and supportive RAs and management, prioritizing resident well-being.',
        5: 'Outstanding RAs and management, proactive and invested in positive living experience.'
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleRatingChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });

        // Update descriptions for each category based on the rating
        if (name === 'overallRating') {
            setDescriptions({
                ...descriptions,
                overall: overallDescriptions[value],
            });
        } else if (name === 'buildingQuality') {
            setDescriptions({
                ...descriptions,
                buildingQuality: buildingQualityDescriptions[value],
            });
        } else if (name === 'buildingAmenities') {
            setDescriptions({
                ...descriptions,
                buildingAmenities: buildingAmenitiesDescriptions[value],
            });
        } else if (name === 'location') {
            setDescriptions({
                ...descriptions,
                location: locationDescriptions[value],
            });
        } else if (name === 'socialLife') {
            setDescriptions({
                ...descriptions,
                socialLife: socialLifeDescriptions[value],
            });
        } else if (name === 'managementStaff') {
            setDescriptions({
                ...descriptions,
                managementStaff: managementStaffDescriptions[value],
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError(false);
            const response = await fetch('/api/reviews/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(...formData)
            });
            const data = await response.json();
            if (data.success === false) setError(data.message);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h2 className='text-center text-3xl font-semibold mt-8'>Add a Review for {hall}</h2>
            <form
                onSubmit={handleSubmit}
                className='w-full max-w-lg sm:max-w-xl md:max-w-2xl mx-auto my-8 p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-md'
            >

                {/* All optional answers */}
                <div className='flex sm:flex-row justify-around relative mb-5 font-medium'>
                    <div>
                        <label>Name: &nbsp;</label>
                        <input
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            className='border-b-2 border-b-black p-2 focus:outline-none'
                            style={{
                                width: '180px',
                            }}
                        />
                    </div>

                    <div>
                        <label>Major: &nbsp;</label>
                        <input
                            type='text'
                            name='major'
                            value={formData.major}
                            onChange={handleChange}
                            className='border-b-2 border-b-black p-2 focus:outline-none'
                            style={{
                                width: '180px',
                            }}
                        />
                    </div>
                </div>

                <div className='flex justify-center mb-5 font-medium'>
                    <div className='flex flex-wrap justify-between w-full max-w-3xl space-x-8 md:space-x-16 items-center'>
                        <div className='flex flex-col sm:flex-row items-center'>
                            <label>Room type:</label>
                            <select
                                name='roomType'
                                value={formData.roomType}
                                onChange={handleChange}
                                className='border-b-2 border-b-black p-2 focus:outline-none'
                            >
                                <option value='Single'>Single</option>
                                <option value='Double'>Double</option>
                                <option value='Triple'>Triple</option>
                            </select>
                        </div>

                        <div className='flex flex-col sm:flex-row items-center'>
                            <label>AC:</label>
                            <select
                                name='ac'
                                value={formData.ac}
                                onChange={handleChange}
                                className='border-b-2 border-b-black p-2 focus:outline-none'
                            >
                                <option value='Yes'>Yes</option>
                                <option value='No'>No</option>
                            </select>
                        </div>

                        <div className='flex flex-col sm:flex-row items-center'>
                            <label>Kitchen:</label>
                            <select
                                name='kitchen'
                                value={formData.kitchen}
                                onChange={handleChange}
                                className='border-b-2 border-b-black p-2 focus:outline-none'
                            >
                                <option value='Yes'>Yes</option>
                                <option value='No'>No</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='my-6 border-t border-gray-500'></div>

                {/* Overall */}
                <div>
                    <div style={{ textAlign: 'center' }}>
                        <h3 className='text-2xl inline-flex items-center'>
                            <span className='font-bold'>Overall</span> <RequiredAsterisk />
                        </h3>
                        <p className='italic mt-2'>How was your overall experience at {hall}?</p>
                    </div>
                    <div className='w-full max-w-lg mx-auto mt-4'>
                        <div className='flex flex-col items-center'>
                            <StarRating
                                name='overallRating'
                                value={formData.overallRating}
                                onChange={(value) => handleRatingChange('overallRating', value)}
                            />
                            <p className='text-center font-semibold mt-5'>{descriptions.overall}</p>
                        </div>
                    </div>
                </div>
                <div className='my-6 border-t border-gray-500'></div>

                {/* Building Quality */}
                <div>
                    <div style={{ textAlign: 'center' }}>
                        <h3 className='text-2xl inline-flex items-center'>
                            <span className='font-bold'>Quality</span> <RequiredAsterisk />
                        </h3>
                        <p className='italic mt-2'>How was the quality and comfort of the building?</p>
                    </div>
                    <div className='w-full max-w-lg mx-auto mt-4'>
                        <div className='flex flex-col items-center'>
                            <StarRating
                                name='buildingQuality'
                                value={formData.buildingQuality}
                                onChange={(value) => handleRatingChange('buildingQuality', value)}
                            />
                            <p className='text-center font-semibold mt-5'>{descriptions.buildingQuality}</p>
                        </div>
                    </div>
                </div>
                <div className='my-6 border-t border-gray-500'></div>

                {/* Building Amenities */}
                <div>
                    <div style={{ textAlign: 'center' }}>
                        <h3 className='text-2xl inline-flex items-center'>
                            <span className='font-bold'>Amenities</span> <RequiredAsterisk />
                        </h3>
                        <p className='italic mt-2'>How was the quality of the building&apos;s amenities?</p>
                    </div>
                    <div className='w-full max-w-lg mx-auto mt-4'>
                        <div className='flex flex-col items-center'>
                            <StarRating
                                name='buildingAmenities'
                                value={formData.buildingAmenities}
                                onChange={(value) => handleRatingChange('buildingAmenities', value)}
                            />
                            <p className='text-center font-semibold mt-5'>{descriptions.buildingAmenities}</p>
                        </div>
                    </div>
                </div>
                <div className='my-6 border-t border-gray-500'></div>

                {/* Location */}
                <div>
                    <div style={{ textAlign: 'center' }}>
                        <h3 className='text-2xl inline-flex items-center'>
                            <span className='font-bold'>Location</span> <RequiredAsterisk />
                        </h3>
                        <p className='italic mt-2'>How convenient and accessible was living in {hall}?</p>
                    </div>
                    <div className='w-full max-w-lg mx-auto mt-4'>
                        <div className='flex flex-col items-center'>
                            <StarRating
                                name='location'
                                value={formData.location}
                                onChange={(value) => handleRatingChange('location', value)}
                            />
                            <p className='text-center font-semibold mt-5'>{descriptions.location}</p>
                        </div>
                    </div>
                </div>
                <div className='my-6 border-t border-gray-500'></div>





                <div>
                    <div style={{ textAlign: 'center' }}>
                        <label>Social Life:</label>
                        <RequiredAsterisk />
                    </div>
                    <StarRating
                        name='socialLife'
                        value={formData.socialLife}
                        onChange={(value) => handleRatingChange('socialLife', value)}
                    />
                    <p>{descriptions.socialLife}</p>
                </div>

                <div>
                    <div style={{ textAlign: 'center' }}>
                        <label>Management & Staff:</label>
                        <RequiredAsterisk />
                    </div>
                    <StarRating
                        name='managementStaff'
                        value={formData.managementStaff}
                        onChange={(value) => handleRatingChange('managementStaff', value)}
                    />
                    <p>{descriptions.managementAndStaff}</p>
                </div>

                <div>
                    <div style={{ textAlign: 'center' }}>
                        <label>Would you recommend living here?</label>
                        <RequiredAsterisk />
                    </div>
                    <label>
                        <input
                            type='radio'
                            name='recommendation'
                            value='Yes'
                            checked={formData.recommendation === 'Yes'}
                            onChange={handleChange}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type='radio'
                            name='recommendation'
                            value='Neutral'
                            checked={formData.recommendation === 'Neutral'}
                            onChange={handleChange}
                        />
                        Neutral
                    </label>
                    <label>
                        <input
                            type='radio'
                            name='recommendation'
                            value='No'
                            checked={formData.recommendation === 'No'}
                            onChange={handleChange}
                        />
                        No
                    </label>
                </div>

                <div>
                    <label>Write a Review:</label>
                    <textarea
                        name='reviewText'
                        value={formData.reviewText}
                        onChange={handleChange}
                    />
                </div>

                <button type='submit'>Submit Review</button>
            </form>
        </div>
    );
};

const StarRating = ({ name, value, onChange }) => {
    return (
        <div style={{ fontSize: '2rem', display: 'inline-flex' }}>
            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} style={{ cursor: 'pointer', padding: '0 5px' }}>
                    {value >= star ? (
                        <FaStar color='gold' onClick={() => onChange(star)} />
                    ) : value >= star - 0.5 ? (
                        <FaStarHalfAlt color='gold' onClick={() => onChange(star - 0.5)} />
                    ) : (
                        <FaRegStar color='gray' onClick={() => onChange(star)} />
                    )}
                </span>
            ))}
        </div>
    );
};

export default AddReview;