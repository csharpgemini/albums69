// server/controllers/albumController.js

import Album from '../models/Album.js';
import Image from '../models/Image.js';

export const createAlbum = async (req, res) => {
  try {
    const album = new Album({ title: req.body.title });
    const saved = await album.save();
    res.status(201).json(saved);
  } catch {
    res.status(400).json({ error: 'Failed to create album' });
  }
};

export const getAlbums = async (req, res) => {
  try {
    const albums = await Album.find().sort({ createdAt: -1 });
    res.json(albums);
  } catch {
    res.status(500).json({ error: 'Failed to fetch albums' });
  }
};

export const deleteAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    await Image.deleteMany({ albumId: id });
    await Album.findByIdAndDelete(id);
    res.json({ message: 'Album and associated images deleted' });
  } catch {
    res.status(500).json({ error: 'Failed to delete album' });
  }
};
