import { Bell, AlertCircle, Calendar, CheckCircle, Info, X } from 'lucide-react';

const types = {
  emergency: { icon: AlertCircle, bg: 'bg-red-50', border: 'border-red-200', iconColor: 'text-red-600', dot: 'bg-red-500' },
  appointment: { icon: Calendar, bg: 'bg-blue-50', border: 'border-blue-200', iconColor: 'text-blue-600', dot: 'bg-blue-500' },
  success: { icon: CheckCircle, bg: 'bg-green-50', border: 'border-green-200', iconColor: 'text-green-600', dot: 'bg-green-500' },
  info: { icon: Info, bg: 'bg-violet-50', border: 'border-violet-200', iconColor: 'text-violet-600', dot: 'bg-violet-500' },
  default: { icon: Bell, bg: 'bg-secondary', border: 'border-border', iconColor: 'text-muted-foreground', dot: 'bg-gray-400' },
};

export default function NotificationItem({ notification, onDismiss, onClick }) {
  const {
    type = 'default',
    title = 'Notification',
    message = '',
    time = 'Just now',
    isRead = false,
  } = notification || {};

  const config = types[type] || types.default;
  const Icon = config.icon;

  return (
    <div
      onClick={onClick}
      className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer hover:shadow-sm ${
        !isRead ? `${config.bg} ${config.border}` : 'bg-card border-border/60'
      }`}
    >
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${isRead ? 'bg-secondary' : config.bg}`}>
        <Icon className={`w-4 h-4 ${isRead ? 'text-muted-foreground' : config.iconColor}`} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <p className={`text-sm font-semibold truncate ${isRead ? 'text-muted-foreground' : 'text-foreground'}`}>{title}</p>
            {!isRead && <span className={`w-2 h-2 rounded-full flex-shrink-0 ${config.dot}`} />}
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); onDismiss?.(); }}
            className="text-muted-foreground hover:text-foreground flex-shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
        {message && <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{message}</p>}
        <p className="text-[10px] text-muted-foreground/60 mt-1">{time}</p>
      </div>
    </div>
  );
}