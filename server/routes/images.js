// server/routes/images.js

import express from 'express';
import { addImage, getImagesByAlbum, deleteImage } from '../controllers/imageController.js';

const router = express.Router();

router.post('/', addImage);
router.get('/:albumId', getImagesByAlbum);
router.delete('/:id', deleteImage);

export default router;
