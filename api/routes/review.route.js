import express from 'express';
import { createReview, getAllReviews, getReviewsBySide, getReviewsByCommunity, getReviewsByHall } from '../controllers/review.controller.js';

const router = express.Router();

router.post('/:side/:hall/add-review', createReview);
router.get('/', getAllReviews);
router.get('/:side', getReviewsBySide);
router.get('/:side/:community', getReviewsByCommunity);
router.get('/:side/:community/:hall', getReviewsByHall);

export default router;
