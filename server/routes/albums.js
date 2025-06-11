// server/routes/albums.js

import express from 'express';
import { createAlbum, getAlbums, deleteAlbum } from '../controllers/albumController.js';

const router = express.Router();

router.post('/', createAlbum);
router.get('/', getAlbums);
router.delete('/:id', deleteAlbum);

export default router;
