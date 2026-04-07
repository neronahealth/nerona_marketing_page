import { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Siren, Loader2, Phone, User, MapPin, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Ambulance() {
  const [form, setForm] = useState({
    requester_name: '',
    requester_phone: '',
    patient_condition: '',
    severity: '',
    pickup_address: '',
    destination_hospital: '',
    notes: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(null);

  useEffect(() => {
    base44.auth.me().then(user => {
      if (user) {
        setForm(prev => ({
          ...prev,
          requester_name: user.full_name || '',
        }));
      }
    }).catch(() => {});
  }, []);

  const handleSubmit = async () => {
    if (!form.requester_name || !form.requester_phone || !form.patient_condition || !form.severity || !form.pickup_address) {
      toast.error('Please fill in all required fields');
      return;
    }
    setSubmitting(true);

    const request = await base44.entities.AmbulanceRequest.create({
      ...form,
      status: 'requested',
    });

    setSubmitted(request);
    setSubmitting(false);
    toast.success('Ambulance request submitted!');
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto px-4 py-16 text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
        </motion.div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Request Submitted</h1>
        <p className="text-muted-foreground mb-2">
          Your ambulance request has been submitted. Our dispatch team is processing your request.
        </p>
        <div className="mt-6 bg-card rounded-2xl border border-border p-5 text-left">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-foreground">Status: Awaiting Dispatch</span>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {form.pickup_address}</p>
            <p className="flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Severity: {form.severity}</p>
            <p className="flex items-center gap-2"><Clock className="w-4 h-4" /> Submitted just now</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-6">
          <Link to="/Home">
            <Button variant="outline" className="w-full rounded-xl">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        {/* Emergency Banner */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-6 flex items-start gap-3">
          <Siren className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h2 className="font-semibold text-red-800">Emergency Ambulance Request</h2>
            <p className="text-sm text-red-600 mt-1">
              For life-threatening emergencies, please also call your local emergency number. This service coordinates hospital-ready transport.
            </p>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-1 flex items-center gap-2">
          <Siren className="w-6 h-6 text-accent" />
          Request Ambulance
        </h1>
        <p className="text-muted-foreground mb-6">Fill in details for fastest dispatch</p>

        <div className="bg-card rounded-2xl border border-border p-6 space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Your Name *</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Full name"
                  value={form.requester_name}
                  onChange={(e) => setForm({...form, requester_name: e.target.value})}
                  className="pl-10 rounded-xl"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Phone Number *</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="+234 800 000 0000"
                  value={form.requester_phone}
                  onChange={(e) => setForm({...form, requester_phone: e.target.value})}
                  className="pl-10 rounded-xl"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">Pickup Address *</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Full pickup location address"
                value={form.pickup_address}
                onChange={(e) => setForm({...form, pickup_address: e.target.value})}
                className="pl-10 rounded-xl"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">Severity Level *</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: 'critical', label: 'Critical', desc: 'Life-threatening', color: 'border-red-300 bg-red-50 text-red-700' },
                { value: 'serious', label: 'Serious', desc: 'Needs urgent care', color: 'border-orange-300 bg-orange-50 text-orange-700' },
                { value: 'moderate', label: 'Moderate', desc: 'Stable but needs transport', color: 'border-yellow-300 bg-yellow-50 text-yellow-700' },
              ].map((sev) => (
                <button
                  key={sev.value}
                  onClick={() => setForm({...form, severity: sev.value})}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    form.severity === sev.value
                      ? sev.color + ' ring-2 ring-offset-1 ring-current'
                      : 'border-border bg-secondary text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <p className="text-sm font-semibold">{sev.label}</p>
                  <p className="text-[10px] mt-0.5">{sev.desc}</p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">Patient Condition *</label>
            <Textarea
              placeholder="Describe the patient's condition (e.g., chest pain, difficulty breathing, trauma...)"
              value={form.patient_condition}
              onChange={(e) => setForm({...form, patient_condition: e.target.value})}
              className="rounded-xl resize-none"
              rows={3}
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">Preferred Hospital</label>
            <Input
              placeholder="Hospital name (optional)"
              value={form.destination_hospital}
              onChange={(e) => setForm({...form, destination_hospital: e.target.value})}
              className="rounded-xl"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">Additional Notes</label>
            <Textarea
              placeholder="Any other information that can help (allergies, medications, access instructions...)"
              value={form.notes}
              onChange={(e) => setForm({...form, notes: e.target.value})}
              className="rounded-xl resize-none"
              rows={2}
            />
          </div>

          <Button
            onClick={handleSubmit}
            disabled={submitting}
            className="w-full h-12 rounded-xl text-base gap-2 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
            size="lg"
          >
            {submitting ? (
              <><Loader2 className="w-4 h-4 animate-spin" /> Submitting Request...</>
            ) : (
              <><Siren className="w-5 h-5" /> Request Ambulance Now</>
            )}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}