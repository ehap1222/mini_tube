import { Video, CheckCircle, XCircle, AlertTriangle, TrendingUp } from 'lucide-react';

export function DashboardStats({ totalVideos, approved, pending, rejected, reports }) {
    const stats = [
        {
            label: 'Total Videos',
            value: totalVideos,
            icon: Video,
            color: 'bg-gradient-to-br from-purple-500 to-purple-700',
            textColor: 'text-purple-600',
        },
        {
            label: 'Approved',
            value: approved,
            icon: CheckCircle,
            color: 'bg-gradient-to-br from-green-500 to-green-700',
            textColor: 'text-green-600',
        },
        {
            label: 'Pending Review',
            value: pending,
            icon: AlertTriangle,
            color: 'bg-gradient-to-br from-yellow-500 to-yellow-700',
            textColor: 'text-yellow-600',
        },
        {
            label: 'Rejected',
            value: rejected,
            icon: XCircle,
            color: 'bg-gradient-to-br from-red-500 to-red-700',
            textColor: 'text-red-600',
        },
        {
            label: 'Flagged Reports',
            value: reports,
            icon: TrendingUp,
            color: 'bg-gradient-to-br from-orange-500 to-orange-700',
            textColor: 'text-orange-600',
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                    <div
                        key={stat.label}
                        className="bg-white rounded-2xl shadow-lg p-6 border-2 border-purple-100 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div className={`p-3 rounded-xl ${stat.color} shadow-lg`}>
                                <Icon className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        <p className="text-3xl mb-1">{stat.value}</p>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                );
            })}
        </div>
    );
}
