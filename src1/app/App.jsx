import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VideoPage from './pages/VideoPage';
import ReelsPage from './pages/ReelsPage';
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import { Toaster } from './components/ui/sonner';

export default function App() {
    return (
        <Router>
            <Toaster position="top-right" />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/video/:id" element={<VideoPage />} />
                <Route path="/reels" element={<ReelsPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
        </Router>
    );
}
