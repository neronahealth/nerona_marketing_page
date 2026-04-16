import { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Calendar, CheckCircle2, Loader2, User, Phone, Mail, Video, Building2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const timeSlots = [
  '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
];

export default function BookAppointment() {
  const urlParams = new URLSearchParams(window.location.search);
  const doctorId = urlParams.get('doctorId');
  const navigate = useNavigate();

  const [form, setForm] = useState({
    patient_name: '',
    patient_phone: '',
    patient_email: '',
    appointment_date: '',
    appointment_time: '',
    type: 'physical',
    reason: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const { data: doctor, isLoading } = useQuery({
    queryKey: ['doctor', doctorId],
    queryFn: async () => {
      const docs = await base44.entities.Doctor.filter({ id: doctorId });
      return docs[0];
    },
    enabled: !!doctorId,
  });

  // Pre-fill user info
  useEffect(() => {
    base44.auth.me().then(user => {
      if (user) {
        setForm(prev => ({
          ...prev,
          patient_name: user.full_name || '',
          patient_email: user.email || '',
        }));
      }
    }).catch(() => {});
  }, []);

  const handleSubmit = async () => {
    if (!form.patient_name || !form.appointment_date || !form.appointment_time) {
      toast.error('Please fill in all required fields');
      return;
    }
    setSubmitting(true);

    await base44.entities.Appointment.create({
      ...form,
      doctor_id: doctorId,
      doctor_name: doctor?.full_name,
      hospital_name: doctor?.hospital_name,
      status: 'pending',
    });

    setSubmitting(false);
    setSuccess(true);
    toast.success('Appointment booked successfully!');
  };

  if (success) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
        </motion.div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Appointment Booked!</h1>
        <p className="text-muted-foreground mb-6">
          Your appointment with {doctor?.full_name} has been submitted. You'll receive confirmation soon.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/Appointments">
            <Button className="rounded-xl">View My Appointments</Button>
          </Link>
          <Link to="/Home">
            <Button variant="outline" className="rounded-xl">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!doctorId) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <p className="text-muted-foreground mb-4">Please select a doctor first from the directory.</p>
        <Link to="/Directory">
          <Button className="rounded-xl">Browse Doctors</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <Link to="/Directory">
        <Button variant="ghost" className="gap-1.5 -ml-2 mb-4 rounded-xl">
          <ArrowLeft className="w-4 h-4" /> Back
        </Button>
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-foreground mb-1 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-primary" />
          Book Appointment
        </h1>
        <p className="text-muted-foreground mb-6">Schedule your consultation</p>

        {/* Doctor Info */}
        {isLoading ? (
          <div className="flex justify-center py-8"><Loader2 className="w-5 h-5 animate-spin" /></div>
        ) : doctor && (
          <div className="bg-card rounded-2xl border border-border p-5 mb-6 flex items-center gap-4">
            <img
              src={doctor.image_url || 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200'}
              alt={doctor.full_name}
              className="w-14 h-14 rounded-xl object-cover"
            />
            <div>
              <h3 className="font-semibold text-foreground">{doctor.full_name}</h3>
              <p className="text-sm text-primary">{doctor.specialty}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Building2 className="w-3 h-3" /> {doctor.hospital_name}
              </p>
            </div>
          </div>
        )}

        {/* Form */}
        <div className="bg-card rounded-2xl border border-border p-6 space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Your full name"
                  value={form.patient_name}
                  onChange={(e) => setForm({...form, patient_name: e.target.value})}
                  className="pl-10 rounded-xl"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Phone *</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="+234 800 000 0000"
                  value={form.patient_phone}
                  onChange={(e) => setForm({...form, patient_phone: e.target.value})}
                  className="pl-10 rounded-xl"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="your@email.com"
                value={form.patient_email}
                onChange={(e) => setForm({...form, patient_email: e.target.value})}
                className="pl-10 rounded-xl"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Date *</label>
              <Input
                type="date"
                value={form.appointment_date}
                onChange={(e) => setForm({...form, appointment_date: e.target.value})}
                className="rounded-xl"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Time *</label>
              <Select value={form.appointment_time} onValueChange={(v) => setForm({...form, appointment_time: v})}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">Consultation Type</label>
            <div className="flex gap-3">
              {['physical', 'virtual'].map((type) => (
                <button
                  key={type}
                  onClick={() => setForm({...form, type})}
                  className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border text-sm font-medium transition-all ${
                    form.type === type
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-secondary border-border text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {type === 'physical' ? <Building2 className="w-4 h-4" /> : <Video className="w-4 h-4" />}
                  {type === 'physical' ? 'In-Person' : 'Virtual'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">Reason for Visit</label>
            <Textarea
              placeholder="Briefly describe why you need this appointment..."
              value={form.reason}
              onChange={(e) => setForm({...form, reason: e.target.value})}
              className="rounded-xl resize-none"
              rows={3}
            />
          </div>

          <Button
            onClick={handleSubmit}
            disabled={submitting}
            className="w-full h-12 rounded-xl text-base gap-2 shadow-lg shadow-primary/20"
            size="lg"
          >
            {submitting ? (
              <><Loader2 className="w-4 h-4 animate-spin" /> Booking...</>
            ) : (
              <><Calendar className="w-4 h-4" /> Confirm Appointment</>
            )}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}