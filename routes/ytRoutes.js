import express from 'express';

const router = express.Router();

// routes
router.get('/', getYtController);
// router.post('/', createPostController);
// router.get('/search', getPostsBySearchController);

export default router;