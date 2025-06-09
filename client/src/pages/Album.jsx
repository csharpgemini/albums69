import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getImages, addImage } from '../api/images.js';
import socket from '../sockets/socket.js';
import ImageForm from '../components/ImageForm.jsx';
import ImageCard from '../components/ImageCard.jsx';

export default function Album() {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [url, setUrl] = useState('');

  useEffect(() => {
    socket.emit('join-album', id);
    getImages(id).then(setImages);
    socket.on('new-image', image => {
      setImages(prev => [image, ...prev]);
    });
    return () => {
      socket.off('new-image');
    };
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url.trim()) return;
    await addImage(id, url);
    setUrl('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-900 text-white px-4 py-6">
      <div className="max-w-4xl mx-auto">
        <ImageForm url={url} setUrl={setUrl} onSubmit={handleSubmit} />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map(img => (
            <ImageCard key={img._id} url={img.url} />
          ))}
        </div>
      </div>
    </div>
  );
}
