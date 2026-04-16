import { Siren, MapPin, Clock, Phone, AlertTriangle, ChevronRight, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EmergencyStatusIndicator from './EmergencyStatusIndicator';

const priorityConfig = {
  critical: { label: 'Critical', className: 'bg-red-600 text-white', pulse: true },
  high: { label: 'High Priority', className: 'bg-red-100 text-red-700', pulse: false },
  medium: { label: 'Medium', className: 'bg-amber-100 text-amber-700', pulse: false },
  low: { label: 'Low', className: 'bg-green-100 text-green-700', pulse: false },
};

export default function EmergencyRequestCard({ request, onViewMap, onContact, onUpdateStatus, compact = false }) {
  const {
    requestId = 'EMR-0012',
    patientName = 'Anonymous',
    location = 'Westlands, Nairobi',
    emergencyType = 'Cardiac Arrest',
    status = 'en-route',
    priority = 'critical',
    createdAt = '14:23',
    eta = '~8 min',
    driverName = 'James Otieno',
    ambulanceId = 'AMB-04',
  } = request || {};

  const pConfig = priorityConfig[priority] || priorityConfig.high;

  if (compact) {
    return (
      <div className={`rounded-2xl border p-4 ${priority === 'critical' ? 'border-red-300 bg-red-50 animate-emergency-pulse' : 'border-border bg-card'}`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Siren className={`w-4 h-4 ${priority === 'critical' ? 'text-red-600' : 'text-muted-foreground'}`} />
            <span className="text-sm font-bold text-foreground">{requestId}</span>
          </div>
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${pConfig.className}`}>{pConfig.label}</span>
        </div>
        <p className="text-xs text-muted-foreground">{emergencyType} · {location}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{createdAt}</span>
          <Button size="sm" className="rounded-xl text-xs h-7 bg-red-600 hover:bg-red-700 text-white" onClick={onViewMap}>
            Track <ChevronRight className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl border-2 p-5 ${priority === 'critical' ? 'border-red-400 bg-red-50/70' : 'border-border bg-card'}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${priority === 'critical' ? 'bg-red-600 animate-emergency-pulse' : 'bg-red-100'}`}>
            <Siren className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-[10px] text-red-500 font-semibold uppercase tracking-wide">{requestId}</p>
            <h3 className="text-base font-bold text-foreground font-jakarta">{emergencyType}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">Patient: {patientName}</p>
          </div>
        </div>
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${pConfig.className}`}>{pConfig.label}</span>
      </div>

      {/* Info grid */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="flex items-start gap-2 text-xs text-muted-foreground">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-red-500" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="w-3.5 h-3.5 flex-shrink-0 text-red-500" />
          <span>Requested: {createdAt}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Truck className="w-3.5 h-3.5 flex-shrink-0 text-red-500" />
          <span>{ambulanceId} · {driverName}</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-red-600">
          <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
          <span>ETA: {eta}</span>
        </div>
      </div>

      {/* Status Indicator */}
      <div className="mb-4">
        <EmergencyStatusIndicator status={status} eta={eta} />
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1 rounded-xl text-xs border-red-200 text-red-600 hover:bg-red-50" onClick={onContact}>
          <Phone className="w-3.5 h-3.5 mr-1.5" />
          Call Patient
        </Button>
        <Button size="sm" className="flex-1 rounded-xl text-xs bg-red-600 hover:bg-red-700 text-white" onClick={onViewMap}>
          <MapPin className="w-3.5 h-3.5 mr-1.5" />
          Track Live
        </Button>
      </div>
    </div>
  );
}