import { Calendar, CheckCircle2, Clock, XCircle, AlertCircle, UserX, Play } from 'lucide-react';

const statuses = {
  scheduled: {
    label: 'Scheduled',
    icon: Calendar,
    className: 'bg-blue-100 text-blue-700 border-blue-200',
  },
  confirmed: {
    label: 'Confirmed',
    icon: CheckCircle2,
    className: 'bg-green-100 text-green-700 border-green-200',
  },
  'in-progress': {
    label: 'In Progress',
    icon: Play,
    className: 'bg-violet-100 text-violet-700 border-violet-200',
  },
  completed: {
    label: 'Completed',
    icon: CheckCircle2,
    className: 'bg-gray-100 text-gray-600 border-gray-200',
  },
  cancelled: {
    label: 'Cancelled',
    icon: XCircle,
    className: 'bg-red-100 text-red-600 border-red-200',
  },
  'no-show': {
    label: 'No Show',
    icon: UserX,
    className: 'bg-orange-100 text-orange-600 border-orange-200',
  },
  pending: {
    label: 'Pending',
    icon: Clock,
    className: 'bg-amber-100 text-amber-700 border-amber-200',
  },
};

export default function AppointmentStatusBadge({ status = 'scheduled' }) {
  const config = statuses[status] || statuses.scheduled;
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${config.className}`}>
      <Icon className="w-3 h-3" />
      {config.label}
    </span>
  );
}