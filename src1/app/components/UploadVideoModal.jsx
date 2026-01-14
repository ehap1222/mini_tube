import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Upload, X, FileVideo, Image as ImageIcon } from 'lucide-react';

export function UploadVideoModal({ isOpen, onClose, onSubmit }) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        ageGroup: '',
        language: '',
        subtitles: '',
    });

    const [videoPreview, setVideoPreview] = useState(null);
    const [thumbnailPreview, setThumbnailPreview] = useState(null);

    const handleVideoChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData({ ...formData, videoFile: file });
            setVideoPreview(file.name);
        }
    };

    const handleThumbnailChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData({ ...formData, thumbnailFile: file });
            const reader = new FileReader();
            reader.onloadend = () => {
                setThumbnailPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
        resetForm();
    };

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            category: '',
            ageGroup: '',
            language: '',
            subtitles: '',
        });
        setVideoPreview(null);
        setThumbnailPreview(null);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl text-purple-600">Upload New Video</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Title */}
                    <div>
                        <Label htmlFor="title">Video Title *</Label>
                        <Input
                            id="title"
                            required
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            placeholder="Enter video title"
                            className="border-purple-200 focus:border-purple-500"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <Label htmlFor="description">Description *</Label>
                        <Textarea
                            id="description"
                            required
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            placeholder="Enter video description"
                            rows={3}
                            className="border-purple-200 focus:border-purple-500"
                        />
                    </div>

                    {/* Category & Age Group */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="category">Category *</Label>
                            <Select
                                required
                                value={formData.category}
                                onValueChange={(value) => setFormData({ ...formData, category: value })}
                            >
                                <SelectTrigger className="border-purple-200">
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="educational">Educational</SelectItem>
                                    <SelectItem value="entertainment">Entertainment</SelectItem>
                                    <SelectItem value="music">Music</SelectItem>
                                    <SelectItem value="storytelling">Storytelling</SelectItem>
                                    <SelectItem value="arts-crafts">Arts & Crafts</SelectItem>
                                    <SelectItem value="science">Science</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label htmlFor="ageGroup">Age Group *</Label>
                            <Select
                                required
                                value={formData.ageGroup}
                                onValueChange={(value) => setFormData({ ...formData, ageGroup: value })}
                            >
                                <SelectTrigger className="border-purple-200">
                                    <SelectValue placeholder="Select age group" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="5-7">5-7 years</SelectItem>
                                    <SelectItem value="8-10">8-10 years</SelectItem>
                                    <SelectItem value="11-12">11-12 years</SelectItem>
                                    <SelectItem value="5-12">5-12 years (All)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Language */}
                    <div>
                        <Label htmlFor="language">Language *</Label>
                        <Select
                            required
                            value={formData.language}
                            onValueChange={(value) => setFormData({ ...formData, language: value })}
                        >
                            <SelectTrigger className="border-purple-200">
                                <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="english">English</SelectItem>
                                <SelectItem value="spanish">Spanish</SelectItem>
                                <SelectItem value="french">French</SelectItem>
                                <SelectItem value="german">German</SelectItem>
                                <SelectItem value="mandarin">Mandarin</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Video Upload */}
                    <div>
                        <Label>Video File *</Label>
                        <div className="mt-2 border-2 border-dashed border-purple-300 rounded-lg p-6 text-center hover:border-purple-500 transition-colors cursor-pointer">
                            <input
                                type="file"
                                accept="video/*"
                                onChange={handleVideoChange}
                                className="hidden"
                                id="video-upload"
                                required
                            />
                            <label htmlFor="video-upload" className="cursor-pointer">
                                {videoPreview ? (
                                    <div className="flex items-center justify-center gap-2 text-purple-600">
                                        <FileVideo className="w-6 h-6" />
                                        <span>{videoPreview}</span>
                                    </div>
                                ) : (
                                    <div>
                                        <Upload className="w-12 h-12 mx-auto text-purple-400 mb-2" />
                                        <p className="text-purple-600">Click to upload video</p>
                                        <p className="text-sm text-gray-500 mt-1">MP4, AVI, MOV (Max 500MB)</p>
                                    </div>
                                )}
                            </label>
                        </div>
                    </div>

                    {/* Thumbnail Upload */}
                    <div>
                        <Label>Thumbnail *</Label>
                        <div className="mt-2 border-2 border-dashed border-purple-300 rounded-lg p-6 text-center hover:border-purple-500 transition-colors cursor-pointer">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleThumbnailChange}
                                className="hidden"
                                id="thumbnail-upload"
                                required
                            />
                            <label htmlFor="thumbnail-upload" className="cursor-pointer">
                                {thumbnailPreview ? (
                                    <img
                                        src={thumbnailPreview}
                                        alt="Thumbnail preview"
                                        className="max-h-32 mx-auto rounded-lg"
                                    />
                                ) : (
                                    <div>
                                        <ImageIcon className="w-12 h-12 mx-auto text-purple-400 mb-2" />
                                        <p className="text-purple-600">Click to upload thumbnail</p>
                                        <p className="text-sm text-gray-500 mt-1">PNG, JPG (Recommended: 1280x720)</p>
                                    </div>
                                )}
                            </label>
                        </div>
                    </div>

                    {/* Subtitles */}
                    <div>
                        <Label htmlFor="subtitles">Subtitles / Translations (Optional)</Label>
                        <Textarea
                            id="subtitles"
                            value={formData.subtitles}
                            onChange={(e) => setFormData({ ...formData, subtitles: e.target.value })}
                            placeholder="Add subtitle URLs or translation notes"
                            rows={2}
                            className="border-purple-200 focus:border-purple-500"
                        />
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex gap-3 pt-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onClose}
                            className="flex-1 border-purple-300 text-purple-600 hover:bg-purple-50"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
                        >
                            Upload Video
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
