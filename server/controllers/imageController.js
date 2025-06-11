// server/controllers/imageController.js

import Image from '../models/Image.js';

export const addImage = async (req, res) => {
  try {
    const { albumId, url } = req.body;
    const image = new Image({ albumId, url });
    const saved = await image.save();

    const io = req.app.get('io');
    io.to(albumId).emit('new-image', saved);

    res.status(201).json(saved);
  } catch {
    res.status(400).json({ error: 'Failed to add image' });
  }
};

export const getImagesByAlbum = async (req, res) => {
  try {
    const images = await Image.find({ albumId: req.params.albumId }).sort({ createdAt: -1 });
    res.json(images);
  } catch {
    res.status(500).json({ error: 'Failed to fetch images' });
  }
};

export const deleteImage = async (req, res) => {
  try {
    const image = await Image.findByIdAndDelete(req.params.id);
    if (image) {
      const io = req.app.get('io');
      io.to(image.albumId.toString()).emit('delete-image', image._id);
      res.json({ message: 'Image deleted', id: image._id });
    } else {
      res.status(404).json({ error: 'Image not found' });
    }
  } catch {
    res.status(500).json({ error: 'Failed to delete image' });
  }
};
