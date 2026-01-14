import { Header } from '../components/Header';
import { Link } from 'react-router-dom';
import { Play, Star, TrendingUp, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const year = new Date().getFullYear();

const categories = [
    { id: 'educational', name: 'Educational', color: 'bg-blue-400', emoji: '📚' },
    { id: 'music', name: 'Music', color: 'bg-pink-400', emoji: '🎵' },
    { id: 'arts', name: 'Arts & Crafts', color: 'bg-green-400', emoji: '🎨' },
    { id: 'science', name: 'Science', color: 'bg-purple-400', emoji: '🔬' },
    { id: 'stories', name: 'Stories', color: 'bg-yellow-400', emoji: '📖' },
    { id: 'games', name: 'Games', color: 'bg-orange-400', emoji: '🎮' },
];

const videos = [
    { id: 1, title: 'Fun Math Adventures!', thumbnail: 'https://images.unsplash.com/photo-1758687126482-4b4b35926f33?w=400', category: 'Educational', views: '1.2M' },
    { id: 2, title: 'Sing Along Songs', thumbnail: 'https://images.unsplash.com/photo-1677128346173-f460d0e2560a?w=400', category: 'Music', views: '2.5M' },
    { id: 3, title: 'DIY Crafts for Kids', thumbnail: 'https://images.unsplash.com/photo-1607211851821-8be3cd6146f0?w=400', category: 'Arts & Crafts', views: '980K' },
    { id: 4, title: 'Science Experiments', thumbnail: 'https://images.unsplash.com/photo-1613271752699-ede48a285196?w=400', category: 'Science', views: '1.8M' },
    { id: 5, title: 'Story Time Magic', thumbnail: 'https://images.unsplash.com/photo-1758598737528-77505cac475f?w=400', category: 'Stories', views: '3.1M' },
    { id: 6, title: 'Fun Learning Games', thumbnail: 'https://images.unsplash.com/photo-1759330203240-b89ccee8840f?w=400', category: 'Games', views: '1.5M' },
];

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
            <Header />

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 text-6xl animate-bounce">⭐</div>
                    <div className="absolute bottom-4 left-4 text-5xl animate-pulse">🌈</div>

                    <div className="relative z-10">
                        <h1 className="text-4xl md:text-6xl text-white mb-4 drop-shadow-lg">
                            Welcome to MiniTube! 🎉
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                            Discover amazing videos made just for you! Learn, play, and have fun safely! 🚀
                        </p>
                        <Link
                            to="/reels"
                            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-purple-700 px-8 py-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 text-xl"
                        >
                            <Play className="inline w-6 h-6 mr-2" />
                            Watch Now!
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Categories */}
            <section className="container mx-auto px-4 py-8">
                <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-8 h-8 text-purple-600" />
                    <h2 className="text-3xl text-purple-700">Explore Categories</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map((category) => (
                        <motion.div
                            key={category.id}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className={`${category.color} rounded-3xl p-6 shadow-xl cursor-pointer hover:shadow-2xl transition-all`}
                        >
                            <div className="text-center">
                                <div className="text-5xl mb-2">{category.emoji}</div>
                                <p className="text-white text-lg">{category.name}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Featured Videos */}
            <section className="container mx-auto px-4 py-8">
                <div className="flex items-center gap-2 mb-6">
                    <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
                    <h2 className="text-3xl text-purple-700">Featured Videos</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.map((video) => (
                        <Link key={video.id} to={`/video/${video.id}`}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
                            >
                                <div className="relative">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="bg-white rounded-full p-4 animate-pulse">
                                            <Play className="w-8 h-8 text-purple-600 fill-purple-600" />
                                        </div>
                                    </div>
                                    <div className="absolute top-3 right-3 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                                        {video.category}
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl text-purple-700 mb-2 line-clamp-2">{video.title}</h3>
                                    <div className="flex items-center text-gray-600">
                                        <TrendingUp className="w-4 h-4 mr-1" />
                                        <span className="text-sm">{video.views} views</span>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Reels Carousel */}
            <section className="container mx-auto px-4 py-8">
                <div className="flex items-center gap-2 mb-6">
                    <div className="text-3xl">🎬</div>
                    <h2 className="text-3xl text-purple-700">Popular Reels</h2>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                    {videos.slice(0, 4).map((video) => (
                        <Link key={video.id} to="/reels" className="flex-shrink-0">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="w-48 bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
                            >
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-3">
                                    <p className="text-purple-700 text-sm line-clamp-2">{video.title}</p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-purple-600 to-pink-600 mt-12 py-8">
                <div className="container mx-auto px-4 text-center text-white">
                    <p className="text-2xl mb-4">🌟 Made with love for awesome kids! 🌟</p>
                    <p className="text-sm">© {year} MiniTube - Safe & Fun Videos for Children</p>
                </div>
            </footer>
        </div>
    );
}
