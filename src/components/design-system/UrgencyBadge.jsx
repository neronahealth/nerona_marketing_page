import { AlertCircle, Clock, CheckCircle, Zap } from 'lucide-react';

const variants = {
  emergency: {
    icon: AlertCircle,
    label: 'Emergency',
    className: 'bg-red-100 text-red-700 border border-red-200',
    dot: 'bg-red-500 animate-pulse',
  },
  urgent: {
    icon: Clock,
    label: 'Urgent',
    className: 'bg-amber-100 text-amber-700 border border-amber-200',
    dot: 'bg-amber-500',
  },
  routine: {
    icon: CheckCircle,
    label: 'Routine',
    className: 'bg-green-100 text-green-700 border border-green-200',
    dot: 'bg-green-500',
  },
  ai: {
    icon: Zap,
    label: 'AI Assessed',
    className: 'bg-violet-100 text-violet-700 border border-violet-200',
    dot: 'bg-violet-500',
  },
};

export default function UrgencyBadge({ level = 'routine', showIcon = true, showDot = false, customLabel, size = 'md' }) {
  const variant = variants[level] || variants.routine;
  const Icon = variant.icon;

  const sizeClasses = {
    sm: 'text-[10px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-sm px-3 py-1.5 gap-2',
  };

  return (
    <span className={`inline-flex items-center font-semibold rounded-full ${variant.className} ${sizeClasses[size]}`}>
      {showDot && <span className={`w-1.5 h-1.5 rounded-full ${variant.dot}`} />}
      {showIcon && !showDot && <Icon className={size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5'} />}
      {customLabel || variant.label}
    </span>
  );
}