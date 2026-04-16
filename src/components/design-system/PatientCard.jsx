import { User, Calendar, Activity, Phone, ChevronRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import UrgencyBadge from './UrgencyBadge';

export default function PatientCard({ patient, onView, onSchedule, compact = false }) {
  const {
    name = 'John Kamau',
    age = 34,
    patientId = 'NH-00234',
    photo = null,
    lastVisit = '2024-11-20',
    nextAppointment = '2024-12-15',
    bloodType = 'O+',
    urgencyLevel = 'routine',
    phone = '+254 712 345 678',
    condition = 'Hypertension Management',
  } = patient || {};

  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2);

  if (compact) {
    return (
      <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/60 hover:border-primary/20 hover:shadow-md transition-all duration-200 cursor-pointer" onClick={onView}>
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          {photo ? <img src={photo} alt={name} className="w-10 h-10 rounded-full object-cover" /> : (
            <span className="text-sm font-bold text-primary">{initials}</span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">{name}</p>
          <p className="text-xs text-muted-foreground">{patientId} · {age}y</p>
        </div>
        <UrgencyBadge level={urgencyLevel} size="sm" showIcon={false} showDot />
        <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
      </div>
    );
  }

  return (
    <div className="card-patient">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
            {photo ? (
              <img src={photo} alt={name} className="w-14 h-14 rounded-2xl object-cover" />
            ) : (
              <span className="text-xl font-bold text-primary">{initials}</span>
            )}
          </div>
          <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-card" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base font-bold text-foreground truncate font-jakarta">{name}</h3>
            <UrgencyBadge level={urgencyLevel} size="sm" />
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">{patientId} · Age {age} · {bloodType}</p>
          <p className="text-xs text-primary font-medium mt-1 truncate">{condition}</p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">Last: {lastVisit}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">Next: {nextAppointment}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Phone className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">{phone}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Activity className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">Active</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1 rounded-xl text-xs" onClick={onView}>
          View Profile
        </Button>
        <Button size="sm" className="flex-1 rounded-xl text-xs" onClick={onSchedule}>
          Schedule
        </Button>
      </div>
    </div>
  );
}