import React, { useState } from "react";
import RequiredAsterisk from "./RequiredAsterisk";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddReview = ({ side, community, hall }) => {
  const [formData, setFormData] = useState({
    name: "",
    academicStanding: "Freshman",
    roomType: "Double",
    ac: "No",
    kitchen: "No",
    overall: 0,
    buildingQuality: 0,
    buildingAmenities: 0,
    location: 0,
    managementAndStaff: 0,
    wouldRecommend: "",
    reviewText: "",
    side: side,
    community: community,
    hall: hall,
  });

  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const [descriptions, setDescriptions] = useState({
    overall: "",
    buildingQuality: "",
    buildingAmenities: "",
    location: "",
    managementAndStaff: "",
  });

  //description of star rating
  const overallDescriptions = {
    1: "Terrible experience, I wanted to move out immediately.",
    2: "Not so great, I would not recommend living here.",
    3: "Average experience, nothing special.",
    4: "Good, some minor issues but overall a good experience.",
    5: "Exceptional, there is no place I would rather live!",
  };

  const buildingQualityDescriptions = {
    1: "Outdated and in need of major repairs, feels neglected.",
    2: "Functional but still really dirty and depressing.",
    3: "Average, decent condition, but could be better.",
    4: "Pretty good, most things are well-maintained.",
    5: "Top-notch, modern, and comfortable living environment.",
  };

  const buildingAmenitiesDescriptions = {
    1: "Laundry room, kitchen, and lounge are in poor condition and mostly unusable.",
    2: "Laundry machines are often broken, kitchen is unclean, and lounge is not inviting.",
    3: "Amenities work but have minor issues; some areas might be under-maintained.",
    4: "Amenities are clean and functional for the most part.",
    5: "All amenities are in excellent condition, greatly improving dorm life.",
  };

  const locationDescriptions = {
    1: "Far from campus; difficult to get around anywhere.",
    2: "A decent walk to class, but far from anywhere else.",
    3: "Average location; decent access to campus and key spots.",
    4: "Convenient location; close to campus and key spots",
    5: "Prime location; very close to campus and everything you need",
  };

  const managementAndStaffDescriptions = {
    1: "Unresponsive and unhelpful RAs and management.",
    2: "Below average RAs and management, inconsistent support.",
    3: "Adequate RAs and management, addressing basic concerns.",
    4: "Attentive and supportive RAs and management, prioritizing resident well-being.",
    5: "Outstanding RAs and management, proactive and invested in positive living experience.",
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
    if (name === "overall") {
      setDescriptions({
        ...descriptions,
        overall: overallDescriptions[value],
      });
    } else if (name === "buildingQuality") {
      setDescriptions({
        ...descriptions,
        buildingQuality: buildingQualityDescriptions[value],
      });
    } else if (name === "buildingAmenities") {
      setDescriptions({
        ...descriptions,
        buildingAmenities: buildingAmenitiesDescriptions[value],
      });
    } else if (name === "location") {
      setDescriptions({
        ...descriptions,
        location: locationDescriptions[value],
      });
    } else if (name === "managementAndStaff") {
      setDescriptions({
        ...descriptions,
        managementAndStaff: managementAndStaffDescriptions[value],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validation logic
    const requiredFields = [
      "overall",
      "buildingQuality",
      "buildingAmenities",
      "location",
      "managementAndStaff",
      "wouldRecommend",
    ];
  
    const missingFields = requiredFields.filter(
      (field) => !formData[field] || formData[field] === 0 || formData[field] === ""
    );
  
    if (missingFields.length > 0) {
      setError(true);
      return;
    }
  
    try {
      setError(false);
      const response = await fetch(`/api/review/${side}/${hall}/add-review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Navigate to thank you page after successful submission
      navigate("/thankyou");
      
    } catch (error) {
      console.error("Error submitting review:", error);
      setError("Failed to submit review: " + error.message);
    }
  };
  

  return (
    <div>
      <h2 className="text-center text-3xl font-semibold mt-8">
        Add a Review for {hall}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-[95%] max-w-sm sm:max-w-xl md:max-w-2xl mx-auto my-6 
                  p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-md"
      >
        {/* All optional answers */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative mb-5 font-medium text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <label className="mb-2 sm:mb-0 sm:mr-2">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border-b-2 border-b-black p-2 focus:outline-none text-center w-full sm:w-[170px]"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center">
            <label className="mb-2 sm:mb-0 sm:mr-2 text-center self-center">
              Academic Standing:
            </label>
            <select
              name="academicStanding"
              value={formData.academicStanding}
              onChange={handleChange}
              className="border-b-2 border-b-black p-2 focus:outline-none text-center"
            >
              <option value="Freshman">Freshman</option>
              <option value="Sophomore">Sophomore</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
              <option value="Graduate">Graduate</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center mb-5 font-medium">
          <div className="flex flex-wrap justify-between w-full max-w-3xl items-center">
            <div className="flex flex-col sm:flex-row items-center">
              <label className="mr-2">Room type:</label>
              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className="border-b-2 border-b-black p-2 focus:outline-none text-center"
              >
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                <option value="Triple">Triple</option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row items-center">
              <label className="mr-2">AC:</label>
              <select
                name="ac"
                value={formData.ac}
                onChange={handleChange}
                className="border-b-2 border-b-black p-2 focus:outline-none text-center"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row items-center">
              <label className="mr-2">Kitchen:</label>
              <select
                name="kitchen"
                value={formData.kitchen}
                onChange={handleChange}
                className="border-b-2 border-b-black p-2 focus:outline-none text-center"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>
        <div className="my-6 border-t border-gray-500"></div>

        {/* Overall */}
        <div>
          <div style={{ textAlign: "center" }}>
            <h3 className="text-2xl inline-flex items-center">
              <span className="font-bold">Overall</span> <RequiredAsterisk />
            </h3>
            <p className="italic mt-2">
              How was your overall experience at {hall}?
            </p>
          </div>
          <div className="w-full max-w-lg mx-auto mt-4">
            <div className="flex flex-col items-center">
              <StarRating
                name="overall"
                value={formData.overall}
                onChange={(value) => handleRatingChange("overall", value)}
              />
              <p className="text-center font-semibold mt-5">
                {descriptions.overall}
              </p>
            </div>
          </div>
        </div>
        <div className="my-6 border-t border-gray-500"></div>

        {/* Building Quality */}
        <div>
          <div style={{ textAlign: "center" }}>
            <h3 className="text-2xl inline-flex items-center">
              <span className="font-bold">Quality</span> <RequiredAsterisk />
            </h3>
            <p className="italic mt-2">
              How was the quality and comfort of the building?
            </p>
          </div>
          <div className="w-full max-w-lg mx-auto mt-4">
            <div className="flex flex-col items-center">
              <StarRating
                name="buildingQuality"
                value={formData.buildingQuality}
                onChange={(value) =>
                  handleRatingChange("buildingQuality", value)
                }
              />
              <p className="text-center font-semibold mt-5">
                {descriptions.buildingQuality}
              </p>
            </div>
          </div>
        </div>
        <div className="my-6 border-t border-gray-500"></div>

        {/* Building Amenities */}
        <div>
          <div style={{ textAlign: "center" }}>
            <h3 className="text-2xl inline-flex items-center">
              <span className="font-bold">Amenities</span> <RequiredAsterisk />
            </h3>
            <p className="italic mt-2">
              How was the quality of the building&apos;s amenities?
            </p>
          </div>
          <div className="w-full max-w-lg mx-auto mt-4">
            <div className="flex flex-col items-center">
              <StarRating
                name="buildingAmenities"
                value={formData.buildingAmenities}
                onChange={(value) =>
                  handleRatingChange("buildingAmenities", value)
                }
              />
              <p className="text-center font-semibold mt-5">
                {descriptions.buildingAmenities}
              </p>
            </div>
          </div>
        </div>
        <div className="my-6 border-t border-gray-500"></div>

        {/* Location */}
        <div>
          <div style={{ textAlign: "center" }}>
            <h3 className="text-2xl inline-flex items-center">
              <span className="font-bold">Location</span> <RequiredAsterisk />
            </h3>
            <p className="italic mt-2">
              How convenient and accessible was living in {hall}?
            </p>
          </div>
          <div className="w-full max-w-lg mx-auto mt-4">
            <div className="flex flex-col items-center">
              <StarRating
                name="location"
                value={formData.location}
                onChange={(value) => handleRatingChange("location", value)}
              />
              <p className="text-center font-semibold mt-5">
                {descriptions.location}
              </p>
            </div>
          </div>
        </div>
        <div className="my-6 border-t border-gray-500"></div>

        {/* Management & Staff */}
        <div>
          <div style={{ textAlign: "center" }}>
            <h3 className="text-2xl inline-flex items-center">
              <span className="font-bold">Management & Staff</span>{" "}
              <RequiredAsterisk />
            </h3>
            <p className="italic mt-2">
              How was your experience with the building&apos;s management?
            </p>
          </div>
          <div className="w-full max-w-lg mx-auto mt-4">
            <div className="flex flex-col items-center">
              <StarRating
                name="managementAndStaff"
                value={formData.managementAndStaff}
                onChange={(value) =>
                  handleRatingChange("managementAndStaff", value)
                }
              />
              <p className="text-center font-semibold mt-5">
                {descriptions.managementAndStaff}
              </p>
            </div>
          </div>
        </div>
        <div className="my-6 border-t border-gray-500"></div>

        {/* wouldRecommend */}
        <div>
          <div style={{ textAlign: "center" }}>
            <h3 className="text-2xl inline-flex items-center">
              <span className="font-bold">
                Would you recommend living here?
              </span>{" "}
              <RequiredAsterisk />
            </h3>
          </div>

          <div className="flex justify-center mt-4 space-x-8">
            <label className="group flex items-center space-x-4 cursor-pointer">
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-red-500 ${
                  formData.wouldRecommend === "Yes" ? "border-red-500" : ""
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full bg-red-600 ${
                    formData.wouldRecommend === "Yes"
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
              </div>
              <span className="text-lg font-medium text-gray-800 group-hover:text-red-600">
                Yes
              </span>
              <input
                type="radio"
                name="wouldRecommend"
                value="Yes"
                checked={formData.wouldRecommend === "Yes"}
                onChange={handleChange}
                className="hidden"
              />
            </label>

            <label className="group flex items-center space-x-4 cursor-pointer">
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-red-500 ${
                  formData.wouldRecommend === "Neutral" ? "border-red-500" : ""
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full bg-red-600 ${
                    formData.wouldRecommend === "Neutral"
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
              </div>
              <span className="text-lg font-medium text-gray-800 group-hover:text-red-600">
                Neutral
              </span>
              <input
                type="radio"
                name="wouldRecommend"
                value="Neutral"
                checked={formData.wouldRecommend === "Neutral"}
                onChange={handleChange}
                className="hidden"
              />
            </label>

            <label className="group flex items-center space-x-4 cursor-pointer">
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-red-500 ${
                  formData.wouldRecommend === "No" ? "border-red-500" : ""
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full bg-red-600 ${
                    formData.wouldRecommend === "No"
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
              </div>
              <span className="text-lg font-medium text-gray-800 group-hover:text-red-600">
                No
              </span>
              <input
                type="radio"
                name="wouldRecommend"
                value="No"
                checked={formData.wouldRecommend === "No"}
                onChange={handleChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Review Text */}
        <div className="my-6">
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-2xl font-bold text-center">Write a Review:</h3>
            <textarea
              name="reviewText"
              value={formData.reviewText}
              onChange={handleChange}
              className="w-full max-w-lg h-32 border border-black rounded-lg p-2 
              focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
              placeholder="Share your thoughts here..."
            />
          </div>
        </div>


        {/* Error message */}
        {error && (
          <div className="text-center text-red-600 font-semibold text-xl my-4">
            <h2>* All required questions must be filled.</h2>
          </div>
        )}


        {/* Submit Button */}
        <div className="my-8 text-center">
          <button
            type="submit"
            className="w-full max-w-xs mx-auto bg-red-600 text-white font-semibold py-3 px-3 rounded-lg shadow-md"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

const StarRating = ({ name, value, onChange }) => {
  return (
    <div style={{ fontSize: "2rem", display: "inline-flex" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} style={{ cursor: "pointer", padding: "0 5px" }}>
          {value >= star ? (
            <FaStar color="gold" onClick={() => onChange(star)} />
          ) : value >= star - 0.5 ? (
            <FaStarHalfAlt color="gold" onClick={() => onChange(star - 0.5)} />
          ) : (
            <FaRegStar color="gray" onClick={() => onChange(star)} />
          )}
        </span>
      ))}
    </div>
  );
};

export default AddReview;
