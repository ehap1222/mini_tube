import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { DashboardStats } from '../components/DashboardStats';
import { FilterBar } from '../components/FilterBar';
import { VideoCard } from '../components/VideoCard';
import { UploadVideoModal } from '../components/UploadVideoModal';
import { ReportsSection } from '../components/ReportsSection';
import { Button } from '../components/ui/button';
import { Plus, Grid3x3, List } from 'lucide-react';
import { toast } from 'sonner';
import { Toaster } from '../components/ui/sonner';

const initialVideos = [
    {
        id: '1',
        title: 'Fun Math Learning Adventure for Kids',
        thumbnail: 'https://images.unsplash.com/photo-1758687126482-4b4b35926f33?w=400',
        category: 'Educational',
        ageGroup: '5-7 years',
        status: 'Approved',
        language: 'English',
        uploadDate: '2025-01-01',
    },
    {
        id: '2',
        title: 'Dance & Music Party Time',
        thumbnail: 'https://images.unsplash.com/photo-1677128346173-f460d0e2560a?w=400',
        category: 'Music',
        ageGroup: '8-10 years',
        status: 'Pending',
        language: 'English',
        uploadDate: '2025-01-02',
    },
    {
        id: '3',
        title: 'Creative Arts & Crafts Tutorial',
        thumbnail: 'https://images.unsplash.com/photo-1607211851821-8be3cd6146f0?w=400',
        category: 'Arts & Crafts',
        ageGroup: '5-7 years',
        status: 'Approved',
        language: 'Spanish',
        uploadDate: '2024-12-28',
    },
    {
        id: '4',
        title: 'Amazing Science Experiments',
        thumbnail: 'https://images.unsplash.com/photo-1613271752699-ede48a285196?w=400',
        category: 'Science',
        ageGroup: '11-12 years',
        status: 'Rejected',
        language: 'English',
        uploadDate: '2024-12-30',
    },
    {
        id: '5',
        title: 'Magical Storytelling Hour',
        thumbnail: 'https://images.unsplash.com/photo-1758598737528-77505cac475f?w=400',
        category: 'Storytelling',
        ageGroup: '8-10 years',
        status: 'Approved',
        language: 'French',
        uploadDate: '2024-12-29',
        reportCount: 2,
    },
    {
        id: '6',
        title: 'Fun Games and Activities',
        thumbnail: 'https://images.unsplash.com/photo-1759330203240-b89ccee8840f?w=400',
        category: 'Entertainment',
        ageGroup: '5-7 years',
        status: 'Pending',
        language: 'English',
        uploadDate: '2025-01-01',
    },
];

export default function AdminDashboard() {
    const [activeSection, setActiveSection] = useState('dashboard');
    const [videos, setVideos] = useState(initialVideos);
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const [viewMode, setViewMode] = useState('grid');
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [ageGroupFilter, setAgeGroupFilter] = useState('all');
    const [languageFilter, setLanguageFilter] = useState('all');

    const filteredVideos = videos.filter((video) => {
        const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter === 'all' || video.status === statusFilter;
        const matchesCategory = categoryFilter === 'all' || video.category === categoryFilter;
        const matchesAgeGroup = ageGroupFilter === 'all' || video.ageGroup === ageGroupFilter;
        const matchesLanguage = languageFilter === 'all' || video.language === languageFilter;
        return matchesSearch && matchesStatus && matchesCategory && matchesAgeGroup && matchesLanguage;
    });

    const reportedVideos = videos.filter((video) => video.reportCount && video.reportCount > 0);

    const stats = {
        totalVideos: videos.length,
        approved: videos.filter((v) => v.status === 'Approved').length,
        pending: videos.filter((v) => v.status === 'Pending').length,
        rejected: videos.filter((v) => v.status === 'Rejected').length,
        reports: reportedVideos.length,
    };

    const handleApprove = (id) => {
        setVideos((prev) =>
            prev.map((video) => (video.id === id ? { ...video, status: 'Approved' } : video))
        );
        toast.success('Video approved successfully!');
    };

    const handleReject = (id) => {
        setVideos((prev) =>
            prev.map((video) => (video.id === id ? { ...video, status: 'Rejected' } : video))
        );
        toast.error('Video rejected');
    };

    const handleDelete = (id) => {
        setVideos((prev) => prev.filter((video) => video.id !== id));
        toast.success('Video deleted successfully!');
    };

    const handleEdit = (id) => {
        toast.info(`Editing video ${id}...`);
    };

    const handleView = (id) => {
        toast.info(`Viewing video ${id}...`);
    };

    const handleUploadVideo = (data) => {
        const newVideo = {
            id: Date.now().toString(),
            title: data.title,
            thumbnail: 'https://images.unsplash.com/photo-1758687126482-4b4b35926f33?w=400',
            category: data.category.charAt(0).toUpperCase() + data.category.slice(1),
            ageGroup: data.ageGroup,
            status: 'Pending',
            language: data.language.charAt(0).toUpperCase() + data.language.slice(1),
            uploadDate: new Date().toISOString().split('T')[0],
        };
        setVideos((prev) => [newVideo, ...prev]);
        toast.success('Video uploaded successfully! Pending review.');
    };

    const handleResetFilters = () => {
        setSearchQuery('');
        setStatusFilter('all');
        setCategoryFilter('all');
        setAgeGroupFilter('all');
        setLanguageFilter('all');
        toast.info('Filters reset');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
            <Toaster position="top-right" />

            <div className="flex">
                <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />

                <main className="flex-1 p-4 lg:p-8">
                    <div className="mb-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <h1 className="text-3xl mb-2">
                                    {activeSection === 'dashboard' && 'Dashboard Overview'}
                                    {activeSection === 'videos' && 'Videos Management'}
                                    {activeSection === 'reels' && 'Reels Management'}
                                    {activeSection === 'categories' && 'Categories'}
                                    {activeSection === 'translations' && 'Translations'}
                                    {activeSection === 'reports' && 'Reports / Flags'}
                                </h1>
                                <p className="text-gray-600">Manage and moderate children's content safely</p>
                            </div>

                            {(activeSection === 'videos' || activeSection === 'reels') && (
                                <div className="flex gap-2">
                                    <div className="flex border-2 border-purple-200 rounded-lg overflow-hidden">
                                        <Button
                                            onClick={() => setViewMode('grid')}
                                            variant={viewMode === 'grid' ? 'default' : 'ghost'}
                                            size="sm"
                                            className={viewMode === 'grid' ? 'bg-purple-600' : ''}
                                        >
                                            <Grid3x3 className="w-4 h-4" />
                                        </Button>
                                        <Button
                                            onClick={() => setViewMode('list')}
                                            variant={viewMode === 'list' ? 'default' : 'ghost'}
                                            size="sm"
                                            className={viewMode === 'list' ? 'bg-purple-600' : ''}
                                        >
                                            <List className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <Button
                                        onClick={() => setIsUploadModalOpen(true)}
                                        className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
                                    >
                                        <Plus className="w-5 h-5 mr-2" />
                                        Upload Video
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>

                    {activeSection === 'dashboard' && (
                        <>
                            <DashboardStats {...stats} />
                            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-purple-100">
                                <h2 className="text-xl text-purple-600 mb-4">Recent Activity</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {videos.slice(0, 6).map((video) => (
                                        <VideoCard
                                            key={video.id}
                                            video={video}
                                            onApprove={handleApprove}
                                            onReject={handleReject}
                                            onDelete={handleDelete}
                                            onEdit={handleEdit}
                                            onView={handleView}
                                        />
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                    {(activeSection === 'videos' || activeSection === 'reels') && (
                        <>
                            <FilterBar
                                searchQuery={searchQuery}
                                onSearchChange={setSearchQuery}
                                statusFilter={statusFilter}
                                onStatusFilterChange={setStatusFilter}
                                categoryFilter={categoryFilter}
                                onCategoryFilterChange={setCategoryFilter}
                                ageGroupFilter={ageGroupFilter}
                                onAgeGroupFilterChange={setAgeGroupFilter}
                                languageFilter={languageFilter}
                                onLanguageFilterChange={setLanguageFilter}
                                onReset={handleResetFilters}
                            />

                            <div className="mt-6">
                                <div className="mb-4 flex items-center justify-between">
                                    <p className="text-gray-600">Showing {filteredVideos.length} of {videos.length} videos</p>
                                </div>

                                <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                                    {filteredVideos.map((video) => (
                                        <VideoCard
                                            key={video.id}
                                            video={video}
                                            onApprove={handleApprove}
                                            onReject={handleReject}
                                            onDelete={handleDelete}
                                            onEdit={handleEdit}
                                            onView={handleView}
                                        />
                                    ))}
                                </div>

                                {filteredVideos.length === 0 && (
                                    <div className="bg-white rounded-2xl shadow-lg p-12 text-center border-2 border-purple-100">
                                        <p className="text-gray-600">No videos found matching your criteria.</p>
                                        <Button onClick={handleResetFilters} variant="outline" className="mt-4 border-purple-300 text-purple-600">
                                            Reset Filters
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </>
                    )}

                    {activeSection === 'reports' && (
                        <ReportsSection
                            reportedVideos={reportedVideos}
                            onApprove={handleApprove}
                            onDelete={handleDelete}
                            onView={handleView}
                        />
                    )}

                    {activeSection === 'categories' && (
                        <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-purple-100">
                            <h2 className="text-2xl text-purple-600 mb-6">Content Categories</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {['Educational', 'Entertainment', 'Music', 'Storytelling', 'Arts & Crafts', 'Science'].map((category) => (
                                    <div key={category} className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6 hover:scale-105 transition-transform cursor-pointer">
                                        <h3 className="text-xl text-purple-800 mb-2">{category}</h3>
                                        <p className="text-purple-600">{videos.filter((v) => v.category === category).length} videos</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeSection === 'translations' && (
                        <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-purple-100">
                            <h2 className="text-2xl text-purple-600 mb-6">Available Languages</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {['English', 'Spanish', 'French', 'German', 'Mandarin'].map((language) => (
                                    <div key={language} className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6 hover:scale-105 transition-transform cursor-pointer">
                                        <h3 className="text-xl text-purple-800 mb-2">{language}</h3>
                                        <p className="text-purple-600">{videos.filter((v) => v.language === language).length} videos</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </main>
            </div>

            <UploadVideoModal
                isOpen={isUploadModalOpen}
                onClose={() => setIsUploadModalOpen(false)}
                onSubmit={handleUploadVideo}
            />
        </div>
    );
}
