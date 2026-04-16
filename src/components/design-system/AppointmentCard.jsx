import { Calendar, Clock, MapPin, Video, MoreVertical, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import AppointmentStatusBadge from './AppointmentStatusBadge';

export default function AppointmentCard({ appointment, onReschedule, onCancel, onViewDetails, compact = false }) {
  const {
    doctorName = 'Dr. Amina Osei',
    specialty = 'Cardiology',
    hospital = 'Aga Khan University Hospital',
    date = 'December 15, 2024',
    time = '10:30 AM',
    type = 'in-person',
    status = 'confirmed',
    appointmentId = 'APT-0234',
    notes = '',
  } = appointment || {};

  if (compact) {
    return (
      <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/60 hover:border-primary/20 transition-all cursor-pointer" onClick={onViewDetails}>
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
          {type === 'virtual' ? (
            <Video className="w-5 h-5 text-primary" />
          ) : (
            <Calendar className="w-5 h-5 text-primary" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">{doctorName}</p>
          <p className="text-xs text-muted-foreground">{date} · {time}</p>
        </div>
        <AppointmentStatusBadge status={status} />
        <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
      </div>
    );
  }

  return (
    <div className="card-patient">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            {type === 'virtual' ? (
              <Video className="w-5 h-5 text-primary" />
            ) : (
              <Calendar className="w-5 h-5 text-primary" />
            )}
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-medium">{appointmentId}</p>
            <h3 className="text-sm font-bold text-foreground font-jakarta">{doctorName}</h3>
            <p className="text-xs text-primary font-medium">{specialty}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <AppointmentStatusBadge status={status} />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="w-7 h-7">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={onViewDetails}>View Details</DropdownMenuItem>
              <DropdownMenuItem onClick={onReschedule}>Reschedule</DropdownMenuItem>
              <DropdownMenuItem onClick={onCancel} className="text-destructive">Cancel</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{date}</span>
          <Clock className="w-3.5 h-3.5 flex-shrink-0 ml-1" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">{hospital}</span>
        </div>
        {notes && (
          <p className="text-xs text-muted-foreground italic bg-secondary/50 px-3 py-2 rounded-lg">{notes}</p>
        )}
      </div>

      {/* Type badge */}
      <div className="flex items-center justify-between pt-3 border-t border-border">
        <span className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
          type === 'virtual' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
        }`}>
          {type === 'virtual' ? <Video className="w-3 h-3" /> : <MapPin className="w-3 h-3" />}
          {type === 'virtual' ? 'Virtual Consultation' : 'In-Person Visit'}
        </span>
        <Button size="sm" className="rounded-xl text-xs h-7" onClick={onViewDetails}>
          Details <ChevronRight className="w-3 h-3 ml-1" />
        </Button>
      </div>
    </div>
  );
}