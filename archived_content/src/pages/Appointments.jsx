import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Calendar, Loader2, Clock, User, Building2, Video, MapPin, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const statusStyles = {
  pending: 'bg-yellow-100 text-yellow-700',
  confirmed: 'bg-green-100 text-green-700',
  completed: 'bg-blue-100 text-blue-700',
  cancelled: 'bg-red-100 text-red-700',
};

export default function Appointments() {
  const { data: appointments, isLoading, refetch } = useQuery({
    queryKey: ['my-appointments'],
    queryFn: () => base44.entities.Appointment.list('-created_date', 50),
  });

  const cancelAppointment = async (id) => {
    await base44.entities.Appointment.update(id, { status: 'cancelled' });
    toast.success('Appointment cancelled');
    refetch();
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Calendar className="w-6 h-6 text-primary" />
              My Appointments
            </h1>
            <p className="text-muted-foreground text-sm mt-1">Manage your upcoming and past appointments</p>
          </div>
          <Link to="/Directory">
            <Button className="rounded-xl gap-1.5" size="sm">
              Book New
            </Button>
          </Link>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>
        ) : !appointments?.length ? (
          <div className="text-center py-20">
            <Calendar className="w-12 h-12 mx-auto mb-3 text-muted-foreground/30" />
            <p className="text-muted-foreground mb-4">No appointments yet</p>
            <Link to="/Directory">
              <Button className="rounded-xl">Find a Doctor</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {appointments.map((apt) => (
              <div
                key={apt.id}
                className="bg-card rounded-2xl border border-border p-5 hover:border-primary/20 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={`${statusStyles[apt.status]} rounded-full text-xs border-0`}>
                        {apt.status}
                      </Badge>
                      <Badge variant="outline" className="rounded-full text-xs gap-1">
                        {apt.type === 'virtual' ? <Video className="w-3 h-3" /> : <Building2 className="w-3 h-3" />}
                        {apt.type === 'virtual' ? 'Virtual' : 'In-Person'}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-foreground">{apt.doctor_name || 'Doctor'}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
                      <Building2 className="w-3 h-3" /> {apt.hospital_name || 'Hospital'}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {apt.appointment_date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {apt.appointment_time}
                      </span>
                    </div>
                    {apt.reason && (
                      <p className="mt-2 text-sm text-muted-foreground italic">{apt.reason}</p>
                    )}
                  </div>
                  {apt.status === 'pending' && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive rounded-xl gap-1"
                      onClick={() => cancelAppointment(apt.id)}
                    >
                      <XCircle className="w-4 h-4" /> Cancel
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}