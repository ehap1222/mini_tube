import { Home, Video, Film, Folder, Languages, Flag, Menu, X } from 'lucide-react';
const logo = "https://placehold.co/200x50?text=MiniTube";
import { useState } from 'react';

export function Sidebar({ activeSection, onSectionChange }) {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard Overview', icon: Home },
        { id: 'videos', label: 'Videos Management', icon: Video },
        { id: 'reels', label: 'Reels Management', icon: Film },
        { id: 'categories', label: 'Categories', icon: Folder },
        { id: 'translations', label: 'Translations', icon: Languages },
        { id: 'reports', label: 'Reports / Flags', icon: Flag },
    ];

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 bg-purple-600 text-white p-2 rounded-lg shadow-lg"
            >
                {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Sidebar */}
            <aside
                className={`
          fixed lg:sticky top-0 left-0 h-screen bg-gradient-to-b from-purple-600 to-purple-800 
          text-white w-64 shadow-2xl z-40 transition-transform duration-300
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
            >
                <div className="p-6 flex flex-col h-full">
                    {/* Logo */}
                    <div className="mb-8 flex items-center justify-center">
                        <img src={logo} alt="MiniTube Logo" className="h-16 object-contain" />
                    </div>

                    {/* Menu Items */}
                    <nav className="flex-1 space-y-2">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        onSectionChange(item.id);
                                        setIsMobileOpen(false);
                                    }}
                                    className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                    ${activeSection === item.id
                                            ? 'bg-white text-purple-600 shadow-lg scale-105'
                                            : 'hover:bg-purple-700 hover:scale-102'
                                        }
                  `}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span>{item.label}</span>
                                </button>
                            );
                        })}
                    </nav>

                    {/* Footer */}
                    <div className="mt-auto pt-6 border-t border-purple-400">
                        <div className="text-center text-sm opacity-80">
                            <p>Admin Dashboard</p>
                            <p className="mt-1">v1.0.0</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isMobileOpen && (
                <div
                    onClick={() => setIsMobileOpen(false)}
                    className="lg:hidden fixed inset-0 bg-black/50 z-30"
                />
            )}
        </>
    );
}
