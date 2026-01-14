import { Header } from '../components/Header';
import { Heart, MessageCircle, Share2, Volume2, VolumeX } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

const reels = [
    { id: 1, title: 'Quick Math Trick! 🎯', thumbnail: 'https://images.unsplash.com/photo-1758687126482-4b4b35926f33?w=400', likes: '25K', comments: '1.2K' },
    { id: 2, title: 'Dance Time! 💃', thumbnail: 'https://images.unsplash.com/photo-1677128346173-f460d0e2560a?w=400', likes: '50K', comments: '3.5K' },
    { id: 3, title: 'DIY Paper Craft ✂️', thumbnail: 'https://images.unsplash.com/photo-1607211851821-8be3cd6146f0?w=400', likes: '30K', comments: '2.1K' },
];

export default function ReelsPage() {
    const [currentReel, setCurrentReel] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [liked, setLiked] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900">
            <Header />

            <div className="relative h-[calc(100vh-120px)] overflow-hidden">
                {/* Current Reel */}
                <motion.div
                    key={currentReel}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="relative w-full max-w-md h-full bg-black rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src={reels[currentReel].thumbnail}
                            alt={reels[currentReel].title}
                            className="w-full h-full object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70">
                            {/* Title */}
                            <div className="absolute bottom-24 left-6 right-20">
                                <h2 className="text-white text-2xl mb-2">{reels[currentReel].title}</h2>
                                <p className="text-white/80 text-sm">Tap to watch more fun! 🎉</p>
                            </div>

                            {/* Actions */}
                            <div className="absolute right-4 bottom-24 space-y-6">
                                <button
                                    onClick={() => setLiked(!liked)}
                                    className="flex flex-col items-center gap-1"
                                >
                                    <div className={`${liked ? 'bg-red-500' : 'bg-white/30'} backdrop-blur-sm rounded-full p-4 hover:scale-110 transition-all`}>
                                        <Heart className={`w-8 h-8 ${liked ? 'text-white fill-white' : 'text-white'}`} />
                                    </div>
                                    <span className="text-white text-sm">{reels[currentReel].likes}</span>
                                </button>

                                <button className="flex flex-col items-center gap-1">
                                    <div className="bg-white/30 backdrop-blur-sm rounded-full p-4 hover:scale-110 transition-all">
                                        <MessageCircle className="w-8 h-8 text-white" />
                                    </div>
                                    <span className="text-white text-sm">{reels[currentReel].comments}</span>
                                </button>

                                <button className="flex flex-col items-center gap-1">
                                    <div className="bg-white/30 backdrop-blur-sm rounded-full p-4 hover:scale-110 transition-all">
                                        <Share2 className="w-8 h-8 text-white" />
                                    </div>
                                    <span className="text-white text-sm">Share</span>
                                </button>

                                <button
                                    onClick={() => setIsMuted(!isMuted)}
                                    className="bg-white/30 backdrop-blur-sm rounded-full p-4 hover:scale-110 transition-all"
                                >
                                    {isMuted ? <VolumeX className="w-8 h-8 text-white" /> : <Volume2 className="w-8 h-8 text-white" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Navigation Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {reels.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentReel(idx)}
                            className={`w-3 h-3 rounded-full transition-all ${idx === currentReel ? 'bg-white w-8' : 'bg-white/50'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
