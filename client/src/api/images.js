import axios from 'axios';

const API = import.meta.env.VITE_SERVER_URL || 'http://localhost:5000';

export const getImages = async (albumId) => {
  const res = await axios.get(`${API}/api/images/${albumId}`);
  return res.data;
};

export const addImage = async (albumId, url) => {
  const res = await axios.post(`${API}/api/images`, { albumId, url });
  return res.data;
};