import { Header } from '../components/Header';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Filter, Play } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { motion } from 'motion/react';

const allVideos = [
    { id: 1, title: 'Fun Math Adventures!', thumbnail: 'https://images.unsplash.com/photo-1758687126482-4b4b35926f33?w=400', category: 'Educational', age: '5-7', language: 'English' },
    { id: 2, title: 'Sing Along Songs', thumbnail: 'https://images.unsplash.com/photo-1677128346173-f460d0e2560a?w=400', category: 'Music', age: '8-10', language: 'English' },
    { id: 3, title: 'DIY Crafts for Kids', thumbnail: 'https://images.unsplash.com/photo-1607211851821-8be3cd6146f0?w=400', category: 'Arts & Crafts', age: '5-7', language: 'Spanish' },
    { id: 4, title: 'Science Experiments', thumbnail: 'https://images.unsplash.com/photo-1613271752699-ede48a285196?w=400', category: 'Science', age: '11-12', language: 'English' },
    { id: 5, title: 'Story Time Magic', thumbnail: 'https://images.unsplash.com/photo-1758598737528-77505cac475f?w=400', category: 'Stories', age: '5-7', language: 'French' },
    { id: 6, title: 'Fun Learning Games', thumbnail: 'https://images.unsplash.com/photo-1759330203240-b89ccee8840f?w=400', category: 'Games', age: '8-10', language: 'English' },
];

export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [category, setCategory] = useState('all');
    const [ageGroup, setAgeGroup] = useState('all');
    const [language, setLanguage] = useState('all');

    const filteredVideos = allVideos.filter((video) => {
        const matchesQuery = video.title.toLowerCase().includes(query.toLowerCase());
        const matchesCategory = category === 'all' || video.category === category;
        const matchesAge = ageGroup === 'all' || video.age === ageGroup;
        const matchesLanguage = language === 'all' || video.language === language;
        return matchesQuery && matchesCategory && matchesAge && matchesLanguage;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
            <Header />

            <div className="container mx-auto px-4 py-8">
                {/* Search Header */}
                <div className="mb-8">
                    <h1 className="text-4xl text-purple-700 mb-2">
                        {query ? `Search results for "${query}"` : 'Search Videos'} 🔍
                    </h1>
                    <p className="text-purple-600 text-lg">{filteredVideos.length} amazing videos found!</p>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-3xl p-6 shadow-xl mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <Filter className="w-6 h-6 text-purple-600" />
                        <h2 className="text-2xl text-purple-700">Filters</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Select value={category} onValueChange={setCategory}>
                            <SelectTrigger className="border-4 border-purple-200 rounded-2xl">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Categories</SelectItem>
                                <SelectItem value="Educational">Educational</SelectItem>
                                <SelectItem value="Music">Music</SelectItem>
                                <SelectItem value="Arts & Crafts">Arts & Crafts</SelectItem>
                                <SelectItem value="Science">Science</SelectItem>
                                <SelectItem value="Stories">Stories</SelectItem>
                                <SelectItem value="Games">Games</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select value={ageGroup} onValueChange={setAgeGroup}>
                            <SelectTrigger className="border-4 border-purple-200 rounded-2xl">
                                <SelectValue placeholder="Age Group" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Ages</SelectItem>
                                <SelectItem value="5-7">5-7 years</SelectItem>
                                <SelectItem value="8-10">8-10 years</SelectItem>
                                <SelectItem value="11-12">11-12 years</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select value={language} onValueChange={setLanguage}>
                            <SelectTrigger className="border-4 border-purple-200 rounded-2xl">
                                <SelectValue placeholder="Language" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Languages</SelectItem>
                                <SelectItem value="English">English</SelectItem>
                                <SelectItem value="Spanish">Spanish</SelectItem>
                                <SelectItem value="French">French</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredVideos.map((video, index) => (
                        <Link key={video.id} to={`/video/${video.id}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
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
                                    <h3 className="text-xl text-purple-700 mb-2">{video.title}</h3>
                                    <div className="flex gap-2 text-sm">
                                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{video.age}</span>
                                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">{video.language}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {filteredVideos.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-8xl mb-4">😢</div>
                        <h2 className="text-3xl text-purple-700 mb-2">Oops! No videos found</h2>
                        <p className="text-purple-600 text-lg">Try searching for something else!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
