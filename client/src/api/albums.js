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