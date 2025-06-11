// client/src/components/AlbumCard.jsx

import { Link } from 'react-router-dom';

export default function AlbumCard({ album, onDelete }) {
  return (
    <div className="relative p-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow hover:bg-white/10 transition">
      <Link to={`/album/${album._id}`} className="block">
        <h2 className="text-lg font-semibold text-white/90 truncate">
          {album.title}
        </h2>
        <p className="text-sm text-white/50">
          Created {new Date(album.createdAt).toLocaleString()}
        </p>
      </Link>
      <button
        onClick={() => onDelete(album._id)}
        className="absolute top-2 right-2 bg-red-600/80 hover:bg-red-700 text-white text-xs px-2 py-1 rounded"
      >
        ✕
      </button>
    </div>
  );
}
