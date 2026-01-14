import { Link, useNavigate } from 'react-router-dom';
import { Search, User, Home, Video as VideoIcon, Menu, X } from 'lucide-react';
import { useState } from 'react';
const logo = "https://placehold.co/200x50?text=MiniTube";
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 shadow-2xl">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <Link to="/" className="flex items-center hover:scale-110 transition-transform duration-300">
                        <img src={logo} alt="MiniTube" className="h-12 md:h-16" />
                    </Link>

                    {/* Search Bar - Desktop */}
                    <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl mx-8">
                        <div className="relative w-full">
                            <Input
                                type="text"
                                placeholder="Search for fun videos..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full rounded-full pl-6 pr-12 py-6 border-4 border-white text-lg shadow-lg focus:scale-105 transition-transform"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
                            >
                                <Search className="w-5 h-5 text-purple-700" />
                            </button>
                        </div>
                    </form>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-4">
                        <Link to="/">
                            <Button className="bg-white text-purple-600 hover:bg-yellow-300 rounded-full px-6 py-6 shadow-lg hover:scale-110 transition-all duration-300">
                                <Home className="w-5 h-5 mr-2" />
                                Home
                            </Button>
                        </Link>
                        <Link to="/reels">
                            <Button className="bg-white text-purple-600 hover:bg-yellow-300 rounded-full px-6 py-6 shadow-lg hover:scale-110 transition-all duration-300">
                                <VideoIcon className="w-5 h-5 mr-2" />
                                Reels
                            </Button>
                        </Link>
                        <Link to="/login">
                            <Button className="bg-yellow-400 text-purple-700 hover:bg-yellow-500 rounded-full px-6 py-6 shadow-lg hover:scale-110 transition-all duration-300">
                                <User className="w-5 h-5 mr-2" />
                                Login
                            </Button>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden bg-white text-purple-600 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="md:hidden pb-4">
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-full pl-6 pr-12 py-4 border-4 border-white shadow-lg"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 rounded-full p-2"
                        >
                            <Search className="w-5 h-5 text-purple-700" />
                        </button>
                    </div>
                </form>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-purple-600 border-t-4 border-white">
                    <nav className="container mx-auto px-4 py-4 space-y-2">
                        <Link
                            to="/"
                            onClick={() => setIsMenuOpen(false)}
                            className="block bg-white text-purple-600 hover:bg-yellow-300 rounded-full px-6 py-4 text-center shadow-lg transition-all"
                        >
                            <Home className="w-5 h-5 inline mr-2" />
                            Home
                        </Link>
                        <Link
                            to="/reels"
                            onClick={() => setIsMenuOpen(false)}
                            className="block bg-white text-purple-600 hover:bg-yellow-300 rounded-full px-6 py-4 text-center shadow-lg transition-all"
                        >
                            <VideoIcon className="w-5 h-5 inline mr-2" />
                            Reels
                        </Link>
                        <Link
                            to="/login"
                            onClick={() => setIsMenuOpen(false)}
                            className="block bg-yellow-400 text-purple-700 hover:bg-yellow-500 rounded-full px-6 py-4 text-center shadow-lg transition-all"
                        >
                            <User className="w-5 h-5 inline mr-2" />
                            Login
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
