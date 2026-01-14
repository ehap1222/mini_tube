import { Play, MoreVertical, Check, X, Trash2, Edit, Eye } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function VideoCard({ video, onApprove, onReject, onDelete, onEdit, onView }) {
    const statusColors = {
        Pending: 'bg-yellow-100 text-yellow-800 border-yellow-300',
        Approved: 'bg-green-100 text-green-800 border-green-300',
        Rejected: 'bg-red-100 text-red-800 border-red-300',
        Blocked: 'bg-gray-100 text-gray-800 border-gray-300',
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-purple-100 hover:shadow-2xl hover:scale-102 transition-all duration-300">
            {/* Thumbnail */}
            <div className="relative group">
                <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                </div>
                {video.reportCount && video.reportCount > 0 && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                        {video.reportCount} Reports
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="flex-1 line-clamp-2 pr-2">{video.title}</h3>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <MoreVertical className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => onView?.(video.id)}>
                                <Eye className="w-4 h-4 mr-2" />
                                View
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => onEdit(video.id)}>
                                <Edit className="w-4 h-4 mr-2" />
                                Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => onDelete(video.id)} className="text-red-600">
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
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
                        <span className="text-gray-500">Uploaded:</span>
                        <p className="text-gray-700">{video.uploadDate}</p>
                    </div>
                </div>

                {/* Status Badge */}
                <div className="mb-3">
                    <Badge className={`${statusColors[video.status]} border`}>
                        {video.status}
                    </Badge>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                    {video.status !== 'Approved' && (
                        <Button
                            onClick={() => onApprove(video.id)}
                            className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                            size="sm"
                        >
                            <Check className="w-4 h-4 mr-1" />
                            Approve
                        </Button>
                    )}
                    {video.status !== 'Rejected' && (
                        <Button
                            onClick={() => onReject(video.id)}
                            className="flex-1 bg-red-500 hover:bg-red-600 text-white"
                            size="sm"
                        >
                            <X className="w-4 h-4 mr-1" />
                            Reject
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
