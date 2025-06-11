// client/src/pages/Home.jsx

import { useEffect, useState } from 'react';
import { getAlbums, createAlbum, deleteAlbum } from '../api/albums.js';
import AlbumForm from '../components/AlbumForm.jsx';
import AlbumCard from '../components/AlbumCard.jsx';

export default function Home() {
  const [albums, setAlbums] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    getAlbums().then(setAlbums);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const album = await createAlbum(title);
    setAlbums(prev => [album, ...prev]);
    setTitle('');
  };

  const handleDelete = async (id) => {
    await deleteAlbum(id);
    setAlbums(prev => prev.filter(album => album._id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-900 text-white px-4 py-6">
      <div className="max-w-4xl mx-auto">
        <AlbumForm title={title} setTitle={setTitle} onSubmit={handleSubmit} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {albums.map(album => (
            <AlbumCard key={album._id} album={album} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}
