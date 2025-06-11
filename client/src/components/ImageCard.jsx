// client/src/components/ImageCard.jsx

export default function ImageCard({ url, id, onDelete }) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-md bg-white/5 backdrop-blur border border-white/10">
      <img
        src={url}
        alt=""
        className="w-full h-40 object-cover"
      />
      <button
        onClick={() => onDelete(id)}
        className="absolute top-1 right-1 bg-red-600/80 hover:bg-red-700 text-white text-xs px-2 py-1 rounded"
      >
        ✕
      </button>
    </div>
  );
}
