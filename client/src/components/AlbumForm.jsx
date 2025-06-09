export default function AlbumForm({ title, setTitle, onSubmit }) {
    return (
      <form
        onSubmit={onSubmit}
        className="flex gap-2 mb-6 p-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow-lg"
      >
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Album title"
          className="flex-1 bg-transparent border-none outline-none placeholder-white/40 text-white px-3"
          required
        />
        <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-white font-medium">
          Create
        </button>
      </form>
    );
  }
  