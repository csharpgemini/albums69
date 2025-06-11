// client/src/api/albums.js

import axios from 'axios';

const API = import.meta.env.VITE_SERVER_URL || 'http://localhost:5000';

export const getAlbums = async () => {
  const res = await axios.get(`${API}/api/albums`);
  return res.data;
};

export const createAlbum = async (title) => {
  const res = await axios.post(`${API}/api/albums`, { title });
  return res.data;
};

export const deleteAlbum = async (id) => {
  const res = await axios.delete(`${API}/api/albums/${id}`);
  return res.data;
};
