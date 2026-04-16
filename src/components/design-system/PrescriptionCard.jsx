import { Pill, Clock, RotateCcw, Bell, ChevronRight, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const frequencyLabels = {
  'once-daily': 'Once daily',
  'twice-daily': 'Twice daily',
  'three-daily': 'Three times daily',
  'as-needed': 'As needed',
  'weekly': 'Weekly',
};

export default function PrescriptionCard({ prescription, onReorder, onSetReminder, onViewDetails, compact = false }) {
  const {
    medicationName = 'Atenolol',
    dosage = '50mg',
    frequency = 'once-daily',
    duration = '30 days',
    prescribedBy = 'Dr. Amina Osei',
    prescribedDate = 'Nov 20, 2024',
    expiresDate = 'Dec 20, 2024',
    instructions = 'Take with food in the morning',
    refillsLeft = 2,
    isActive = true,
    rxId = 'RX-2341',
  } = prescription || {};

  if (compact) {
    return (
      <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/60 hover:border-primary/20 transition-all cursor-pointer" onClick={onViewDetails}>
        <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
          <Pill className="w-4 h-4 text-green-600" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">{medicationName} <span className="text-xs text-muted-foreground font-normal">{dosage}</span></p>
          <p className="text-xs text-muted-foreground">{frequencyLabels[frequency] || frequency}</p>
        </div>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
          {isActive ? 'Active' : 'Expired'}
        </span>
        <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
      </div>
    );
  }

  return (
    <div className={`card-patient border-l-4 ${isActive ? 'border-l-green-400' : 'border-l-gray-300'}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isActive ? 'bg-green-50' : 'bg-gray-50'}`}>
            <Pill className={`w-5 h-5 ${isActive ? 'text-green-600' : 'text-gray-400'}`} />
          </div>
          <div>
            <h3 className="text-base font-bold text-foreground font-jakarta">{medicationName}</h3>
            <p className="text-xs text-muted-foreground">{rxId}</p>
          </div>
        </div>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
          {isActive ? 'Active' : 'Expired'}
        </span>
      </div>

      {/* Details grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-3 text-xs">
        <div>
          <p className="text-muted-foreground">Dosage</p>
          <p className="font-semibold text-foreground">{dosage}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Frequency</p>
          <p className="font-semibold text-foreground">{frequencyLabels[frequency] || frequency}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Duration</p>
          <p className="font-semibold text-foreground">{duration}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Refills</p>
          <p className={`font-semibold ${refillsLeft === 0 ? 'text-red-500' : 'text-foreground'}`}>
            {refillsLeft} left
          </p>
        </div>
      </div>

      {/* Instructions */}
      {instructions && (
        <div className="bg-secondary/50 rounded-xl p-2.5 mb-3 text-xs text-muted-foreground">
          💊 {instructions}
        </div>
      )}

      {/* Provider info */}
      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 pb-3 border-b border-border">
        <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{prescribedBy}</span>
        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{prescribedDate}</span>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1 rounded-xl text-xs" onClick={onSetReminder}>
          <Bell className="w-3.5 h-3.5 mr-1.5" />
          Reminder
        </Button>
        <Button size="sm" className="flex-1 rounded-xl text-xs" onClick={onReorder} disabled={!isActive}>
          <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
          Reorder
        </Button>
      </div>
    </div>
  );
}