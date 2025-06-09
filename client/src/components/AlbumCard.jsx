import { Link } from 'react-router-dom';

export default function AlbumCard({ album }) {
  return (
    <Link
      to={`/album/${album._id}`}
      className="block p-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow hover:bg-white/10 transition"
    >
      <h2 className="text-lg font-semibold text-white/90 truncate">
        {album.title}
      </h2>
      <p className="text-sm text-white/50">
        Created {new Date(album.createdAt).toLocaleString()}
      </p>
    </Link>
  );
}
