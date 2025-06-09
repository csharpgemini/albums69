export default function ImageCard({ url }) {
    return (
      <div className="rounded-xl overflow-hidden shadow-md bg-white/5 backdrop-blur border border-white/10">
        <img
          src={url}
          alt=""
          className="w-full h-40 object-cover"
        />
      </div>
    );
  }