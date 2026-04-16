import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export default function DashboardStatsCard({ title, value, unit, change, changeLabel, icon: Icon, iconBg, iconColor, trend = 'up' }) {
  const isPositive = trend === 'up';
  const isNeutral = trend === 'neutral';

  return (
    <div className="bg-card rounded-2xl border border-border/60 p-5 hover:shadow-elevation-2 hover:border-primary/20 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-11 h-11 rounded-xl ${iconBg || 'bg-primary/10'} flex items-center justify-center`}>
          {Icon && <Icon className={`w-5 h-5 ${iconColor || 'text-primary'}`} />}
        </div>
        {change !== undefined && (
          <div className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
            isNeutral ? 'bg-gray-100 text-gray-600' :
            isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {isNeutral ? <Minus className="w-3 h-3" /> : isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {change}%
          </div>
        )}
      </div>
      <p className="text-3xl font-extrabold text-foreground font-jakarta leading-none">
        {value}
        {unit && <span className="text-base font-normal text-muted-foreground ml-1">{unit}</span>}
      </p>
      <p className="text-sm text-muted-foreground mt-1">{title}</p>
      {changeLabel && (
        <p className="text-xs text-muted-foreground/70 mt-1">{changeLabel}</p>
      )}
    </div>
  );
}