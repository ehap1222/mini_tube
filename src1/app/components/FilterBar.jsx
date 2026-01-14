import { Search, SlidersHorizontal } from 'lucide-react';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';

export function FilterBar({
    searchQuery,
    onSearchChange,
    statusFilter,
    onStatusFilterChange,
    categoryFilter,
    onCategoryFilterChange,
    ageGroupFilter,
    onAgeGroupFilterChange,
    languageFilter,
    onLanguageFilterChange,
    onReset,
}) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 border-2 border-purple-100">
            <div className="flex items-center gap-2 mb-4">
                <SlidersHorizontal className="w-5 h-5 text-purple-600" />
                <h3 className="text-purple-600">Filters & Search</h3>
            </div>

            {/* Search Bar */}
            <div className="mb-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
                    <Input
                        type="text"
                        placeholder="Search by title..."
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="pl-10 border-purple-200 focus:border-purple-500"
                    />
                </div>
            </div>

            {/* Filters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Status Filter */}
                <Select value={statusFilter} onValueChange={onStatusFilterChange}>
                    <SelectTrigger className="border-purple-200">
                        <SelectValue placeholder="All Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="Pending">Pending</SelectItem>
                        <SelectItem value="Approved">Approved</SelectItem>
                        <SelectItem value="Rejected">Rejected</SelectItem>
                        <SelectItem value="Blocked">Blocked</SelectItem>
                    </SelectContent>
                </Select>

                {/* Category Filter */}
                <Select value={categoryFilter} onValueChange={onCategoryFilterChange}>
                    <SelectTrigger className="border-purple-200">
                        <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="Educational">Educational</SelectItem>
                        <SelectItem value="Entertainment">Entertainment</SelectItem>
                        <SelectItem value="Music">Music</SelectItem>
                        <SelectItem value="Storytelling">Storytelling</SelectItem>
                        <SelectItem value="Arts & Crafts">Arts & Crafts</SelectItem>
                        <SelectItem value="Science">Science</SelectItem>
                    </SelectContent>
                </Select>

                {/* Age Group Filter */}
                <Select value={ageGroupFilter} onValueChange={onAgeGroupFilterChange}>
                    <SelectTrigger className="border-purple-200">
                        <SelectValue placeholder="All Ages" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Ages</SelectItem>
                        <SelectItem value="5-7 years">5-7 years</SelectItem>
                        <SelectItem value="8-10 years">8-10 years</SelectItem>
                        <SelectItem value="11-12 years">11-12 years</SelectItem>
                    </SelectContent>
                </Select>

                {/* Language Filter */}
                <Select value={languageFilter} onValueChange={onLanguageFilterChange}>
                    <SelectTrigger className="border-purple-200">
                        <SelectValue placeholder="All Languages" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Languages</SelectItem>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="Spanish">Spanish</SelectItem>
                        <SelectItem value="French">French</SelectItem>
                        <SelectItem value="German">German</SelectItem>
                        <SelectItem value="Mandarin">Mandarin</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Reset Button */}
            {onReset && (
                <div className="mt-4">
                    <Button
                        onClick={onReset}
                        variant="outline"
                        className="w-full sm:w-auto border-purple-300 text-purple-600 hover:bg-purple-50"
                    >
                        Reset Filters
                    </Button>
                </div>
            )}
        </div>
    );
}
