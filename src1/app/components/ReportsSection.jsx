import { AlertTriangle, Eye, Trash2, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function ReportsSection({ reportedVideos, onApprove, onDelete, onView }) {
    if (reportedVideos.length === 0) {
        return (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center border-2 border-purple-100">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl text-gray-800 mb-2">All Clear!</h3>
                <p className="text-gray-600">No reported videos at the moment.</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl text-purple-600">Reported Videos ({reportedVideos.length})</h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {reportedVideos.map((video) => (
                    <div
                        key={video.id}
                        className="bg-white rounded-2xl shadow-lg p-6 border-2 border-orange-200 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Thumbnail */}
                            <div className="relative w-full md:w-48 h-32 flex-shrink-0">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                                    {video.reportCount} Reports
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-xl mb-2">{video.title}</h3>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3 text-sm">
                                    <div>
                                        <span className="text-gray-500">Category:</span>
                                        <p className="text-purple-600">{video.category}</p>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">Age Group:</span>
                                        <p className="text-purple-600">{video.ageGroup}</p>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">Language:</span>
                                        <p className="text-purple-600">{video.language}</p>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">Status:</span>
                                        <Badge className={
                                            video.status === 'Approved'
                                                ? 'bg-green-100 text-green-800'
                                                : video.status === 'Pending'
                                                    ? 'bg-yellow-100 text-yellow-800'
                                                    : 'bg-red-100 text-red-800'
                                        }>
                                            {video.status}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <Button
                                        onClick={() => onView(video.id)}
                                        variant="outline"
                                        size="sm"
                                        className="border-purple-300 text-purple-600 hover:bg-purple-50"
                                    >
                                        <Eye className="w-4 h-4 mr-1" />
                                        Review
                                    </Button>
                                    <Button
                                        onClick={() => onApprove(video.id)}
                                        className="bg-green-500 hover:bg-green-600 text-white"
                                        size="sm"
                                    >
                                        <CheckCircle className="w-4 h-4 mr-1" />
                                        Keep Video
                                    </Button>
                                    <Button
                                        onClick={() => onDelete(video.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white"
                                        size="sm"
                                    >
                                        <Trash2 className="w-4 h-4 mr-1" />
                                        Remove Video
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
