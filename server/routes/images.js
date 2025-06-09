import express from 'express';
import { addImage, getImagesByAlbum } from '../controllers/imageController.js';

const router = express.Router();

router.post('/', addImage);
router.get('/:albumId', getImagesByAlbum);

export default router;