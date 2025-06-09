import express from 'express';
import { createAlbum, getAlbums } from '../controllers/albumController.js';

const router = express.Router();

router.post('/', createAlbum);
router.get('/', getAlbums);

export default router;
