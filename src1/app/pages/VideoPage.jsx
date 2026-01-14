import { Header } from '../components/Header';
import { useParams, Link } from 'react-router-dom';
import { ThumbsUp, Share2, BookmarkPlus, Play } from 'lucide-react';
import { Button } from '../components/ui/button';
import { motion } from 'motion/react';

const relatedVideos = [
    { id: 2, title: 'Sing Along Songs', thumbnail: 'https://images.unsplash.com/photo-1677128346173-f460d0e2560a?w=200' },
    { id: 3, title: 'DIY Crafts', thumbnail: 'https://images.unsplash.com/photo-1607211851821-8be3cd6146f0?w=200' },
    { id: 4, title: 'Science Fun', thumbnail: 'https://images.unsplash.com/photo-1613271752699-ede48a285196?w=200' },
];

export default function VideoPage() {
    const { id } = useParams();

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
            <Header />

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Video Section */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-2xl"
                        >
                            {/* Video Player */}
                            <div className="relative bg-black aspect-video flex items-center justify-center">
                                <img
                                    src="https://images.unsplash.com/photo-1758687126482-4b4b35926f33?w=800"
                                    alt="Video"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                    <button className="bg-white rounded-full p-8 hover:scale-110 transition-transform shadow-2xl">
                                        <Play className="w-16 h-16 text-purple-600 fill-purple-600" />
                                    </button>
                                </div>
                            </div>

                            {/* Video Info */}
                            <div className="p-6">
                                <h1 className="text-3xl text-purple-700 mb-4">Fun Math Adventures! 🎓</h1>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-6 py-6 hover:scale-110 transition-transform shadow-lg">
                                        <ThumbsUp className="w-5 h-5 mr-2" />
                                        Like 👍
                                    </Button>
                                    <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full px-6 py-6 hover:scale-110 transition-transform shadow-lg">
                                        <Share2 className="w-5 h-5 mr-2" />
                                        Share
                                    </Button>
                                    <Button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full px-6 py-6 hover:scale-110 transition-transform shadow-lg">
                                        <BookmarkPlus className="w-5 h-5 mr-2" />
                                        Save
                                    </Button>
                                </div>

                                <div className="bg-purple-100 rounded-2xl p-4 mb-4">
                                    <p className="text-purple-700 text-lg">
                                        📊 <strong>1.2M views</strong> • 🗓️ 2 days ago
                                    </p>
                                </div>

                                <div className="bg-gradient-to-r from-yellow-100 to-pink-100 rounded-2xl p-6">
                                    <p className="text-purple-800 text-lg leading-relaxed">
                                        Join us on an exciting math adventure! Learn numbers, counting, and simple addition in the most fun way! 🎉 Perfect for kids aged 5-8! 🌟
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Comments Section - Child Friendly */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-8 bg-white rounded-3xl p-6 shadow-2xl"
                        >
                            <h3 className="text-2xl text-purple-700 mb-4">💬 Fun Comments!</h3>
                            <div className="space-y-4">
                                <div className="bg-blue-100 rounded-2xl p-4">
                                    <p className="text-purple-800">😊 This is so cool! I love learning math now!</p>
                                    <p className="text-sm text-purple-600 mt-2">- Timmy, Age 7</p>
                                </div>
                                <div className="bg-pink-100 rounded-2xl p-4">
                                    <p className="text-purple-800">🎉 Amazing video! Can you make more please?</p>
                                    <p className="text-sm text-purple-600 mt-2">- Sarah, Age 6</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Related Videos Sidebar */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-3xl p-6 shadow-2xl sticky top-24"
                        >
                            <h3 className="text-2xl text-purple-700 mb-4">🎬 More Fun Videos!</h3>
                            <div className="space-y-4">
                                {relatedVideos.map((video) => (
                                    <Link key={video.id} to={`/video/${video.id}`}>
                                        <div className="flex gap-3 hover:bg-purple-50 rounded-2xl p-2 transition-all group">
                                            <img
                                                src={video.thumbnail}
                                                alt={video.title}
                                                className="w-32 h-20 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform"
                                            />
                                            <div className="flex-1">
                                                <p className="text-purple-700 line-clamp-2">{video.title}</p>
                                                <p className="text-sm text-purple-500 mt-1">👀 500K views</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
