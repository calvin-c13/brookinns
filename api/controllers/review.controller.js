import Review from "../models/review.model.js";
import { errorHandler } from "../utils/error.js";

// Create a new review
export const createReview = async (req, res, next) => {
  const {
    side,
    community,
    hall,
    name,
    academicStanding,
    roomType,
    ac,
    kitchen,
    overall,
    buildingQuality,
    buildingAmenities,
    location,
    managementAndStaff,
    wouldRecommend,
    reviewText,
  } = req.body;

  const newReview = new Review({
    side,
    community,
    hall,
    name,
    academicStanding,
    roomType,
    ac,
    kitchen,
    overall,
    buildingQuality,
    buildingAmenities,
    location,
    managementAndStaff,
    wouldRecommend,
    reviewText,
  });

  // Save the review to the database
  try {
    console.log("Attempting to save new review:", newReview); // Log the review object
    await newReview.save();
    console.log("Review saved successfully."); // Log success
    return res
      .status(201)
      .json(newReview);
  } catch (error) {
    console.error("Error occurred while saving review:", error); // Log the error
    next(error);
  }
};

// Get all reviews
export const getAllReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    next(errorHandler(500, "Error fetching reviews"));
  }
};

// Get reviews by side (East or West)
export const getReviewsBySide = async (req, res, next) => {
  const { side } = req.params;

  try {
    const reviews = await Review.find({ side });
    res.status(200).json(reviews);
  } catch (error) {
    next(errorHandler(500, `Error fetching reviews for ${side} side`));
  }
};

// Get reviews by community within a side
export const getReviewsByCommunity = async (req, res, next) => {
  const { side, community } = req.params;

  try {
    const reviews = await Review.find({ side, community });
    res.status(200).json(reviews);
  } catch (error) {
    next(
      errorHandler(
        500,
        `Error fetching reviews for ${community} in ${side} side`
      )
    );
  }
};

// Get reviews by hall
export const getReviewsByHall = async (req, res) => {
  const { side, community, hall } = req.params;
  try {
    const reviews = await Review.find({ side, community, hall });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};