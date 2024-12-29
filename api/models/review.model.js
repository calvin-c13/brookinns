import mongoose from "mongoose";

// Capitalize the first letter of a string
function capitalizeFirstLetter(value) {
  if (typeof value !== "string") return "";
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

/**
 * ReviewSchema defines the structure of a review document for the database.
 * This schema is used to capture user-submitted reviews about residential halls,
 * including details like side (East/West), community, hall, and various ratings.
 */
const ReviewSchema = new mongoose.Schema(
  {
    side: {
      // East or West side
      type: String,
      enum: ["East", "West"],
      set: capitalizeFirstLetter,
      lowercase: true,
    },
    community: {
      // Specific community name
      type: String,
      trim: true,
      lowercase: true,
    },
    hall: {
      // Specific hall name
      type: String,
      trim: true,
      lowercase: true,
    },
    name: {
      type: String,
      trim: true,
      set: capitalizeFirstLetter,
    },
    major: {
      type: String,
      trim: true,
      set: capitalizeFirstLetter,
    },
    academicStanding: {
      type: String,
      enum: ["Freshman", "Sophomore", "Junior", "Senior", "Graduate"],
    },
    roomType: {
      type: String,
      enum: ["Single", "Double", "Triple"],
    },
    ac: {
      type: String,
      enum: ["Yes", "No"],
    },
    kitchen: {
      type: String,
      enum: ["Yes", "No"],
    },
    //required
    overall: {
      type: Number,
      min: 0.5,
      max: 5,
      required: true,
    },
    buildingQuality: {
      type: Number,
      min: 0.5,
      max: 5,
      required: true,
    },
    buildingAmenities: {
      type: Number,
      min: 0.5,
      max: 5,
      required: true,
    },
    location: {
      type: Number,
      min: 0.5,
      max: 5,
      required: true,
    },
    socialLife: {
      type: Number,
      min: 0.5,
      max: 5,
      required: true,
    },
    managementAndStaff: {
      type: Number,
      min: 0.5,
      max: 5,
      required: true,
    },
    wouldRecommend: {
      type: String,
      enum: [
        "Highly likely",
        "Likely",
        "Neutral",
        "Unlikely",
        "Highly unlikely",
      ],
      required: true,
    },
    reviewText: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", ReviewSchema);

export default Review;
