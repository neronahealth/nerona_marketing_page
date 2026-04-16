import { Heart, Thermometer, Droplets, Wind, Activity, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const vitals = [
  {
    key: 'heartRate',
    label: 'Heart Rate',
    unit: 'bpm',
    icon: Heart,
    normalRange: [60, 100],
    criticalRange: [40, 130],
    iconColor: 'text-red-500',
    bgColor: 'bg-red-50',
  },
  {
    key: 'systolic',
    label: 'Blood Pressure',
    unit: 'mmHg',
    icon: Activity,
    normalRange: [90, 120],
    criticalRange: [70, 180],
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    key: 'temperature',
    label: 'Temperature',
    unit: '°C',
    icon: Thermometer,
    normalRange: [36.1, 37.2],
    criticalRange: [35, 40],
    iconColor: 'text-amber-500',
    bgColor: 'bg-amber-50',
  },
  {
    key: 'oxygenSat',
    label: 'SpO2',
    unit: '%',
    icon: Droplets,
    normalRange: [95, 100],
    criticalRange: [90, 100],
    iconColor: 'text-cyan-500',
    bgColor: 'bg-cyan-50',
  },
  {
    key: 'respRate',
    label: 'Resp. Rate',
    unit: '/min',
    icon: Wind,
    normalRange: [12, 20],
    criticalRange: [8, 30],
    iconColor: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
  },
];

function getStatus(value, normal, critical) {
  if (value === null || value === undefined) return 'unknown';
  if (value >= normal[0] && value <= normal[1]) return 'normal';
  if (value >= critical[0] && value <= critical[1]) return 'warning';
  return 'critical';
}

function TrendIcon({ trend }) {
  if (trend === 'up') return <TrendingUp className="w-3.5 h-3.5 text-amber-500" />;
  if (trend === 'down') return <TrendingDown className="w-3.5 h-3.5 text-blue-500" />;
  return <Minus className="w-3.5 h-3.5 text-muted-foreground" />;
}

const statusStyles = {
  normal: 'border-green-200 bg-green-50/60',
  warning: 'border-amber-200 bg-amber-50/60',
  critical: 'border-red-200 bg-red-50/60',
  unknown: 'border-border bg-secondary/30',
};

const statusTextColors = {
  normal: 'text-green-700',
  warning: 'text-amber-700',
  critical: 'text-red-700',
  unknown: 'text-muted-foreground',
};

export default function VitalSignsDisplay({ values = {}, trends = {}, compact = false }) {
  if (compact) {
    return (
      <div className="grid grid-cols-3 gap-2">
        {vitals.slice(0, 3).map((vital) => {
          const value = values[vital.key];
          const status = getStatus(value, vital.normalRange, vital.criticalRange);
          const Icon = vital.icon;
          return (
            <div key={vital.key} className={`rounded-xl border p-2.5 ${statusStyles[status]}`}>
              <div className="flex items-center gap-1.5 mb-1">
                <Icon className={`w-3 h-3 ${vital.iconColor}`} />
                <span className="text-[10px] text-muted-foreground">{vital.label}</span>
              </div>
              <p className={`text-base font-bold ${statusTextColors[status]}`}>
                {value ?? '—'}
                <span className="text-[10px] font-normal ml-0.5 text-muted-foreground">{vital.unit}</span>
              </p>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {vitals.map((vital) => {
        const value = values[vital.key];
        const trend = trends[vital.key];
        const status = getStatus(value, vital.normalRange, vital.criticalRange);
        const Icon = vital.icon;

        return (
          <div key={vital.key} className={`rounded-2xl border p-4 transition-all ${statusStyles[status]} ${status === 'critical' ? 'animate-pulse' : ''}`}>
            <div className="flex items-center justify-between mb-3">
              <div className={`w-9 h-9 rounded-xl ${vital.bgColor} flex items-center justify-center`}>
                <Icon className={`w-4.5 h-4.5 ${vital.iconColor}`} />
              </div>
              <div className="flex items-center gap-1">
                <TrendIcon trend={trend} />
                {status !== 'unknown' && (
                  <span className={`text-[9px] font-bold uppercase ${statusTextColors[status]}`}>
                    {status}
                  </span>
                )}
              </div>
            </div>
            <p className={`text-2xl font-extrabold leading-none mb-0.5 ${statusTextColors[status]}`}>
              {value ?? '—'}
            </p>
            <p className="text-[10px] text-muted-foreground">{vital.unit}</p>
            <p className="text-xs text-muted-foreground mt-1 font-medium">{vital.label}</p>
            <p className="text-[9px] text-muted-foreground/60 mt-0.5">
              Normal: {vital.normalRange[0]}–{vital.normalRange[1]}
            </p>
          </div>
        );
      })}
    </div>
  );
}