import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Album from './pages/Album.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album/:id" element={<Album />} />
      </Routes>
    </div>
  );
}
