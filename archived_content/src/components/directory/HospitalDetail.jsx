import { ArrowLeft, Star, MapPin, ShieldCheck, Phone, Mail, Clock, Bed, Siren } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DoctorCard from './DoctorCard';

export default function HospitalDetail({ hospital, doctors, onBack }) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Button variant="ghost" onClick={onBack} className="gap-1.5 mb-4 -ml-2 rounded-xl">
        <ArrowLeft className="w-4 h-4" /> Back to Directory
      </Button>

      <div className="rounded-2xl overflow-hidden border border-border bg-card">
        <div className="aspect-[21/9] overflow-hidden">
          <img
            src={hospital.image_url || 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800'}
            alt={hospital.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                {hospital.verified && <ShieldCheck className="w-5 h-5 text-primary" />}
                <h1 className="text-2xl font-bold text-foreground">{hospital.name}</h1>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground mt-1">
                <MapPin className="w-4 h-4" />
                {hospital.address}, {hospital.city}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700">
                <Star className="w-4 h-4" fill="currentColor" />
                <span className="font-semibold text-sm">{hospital.rating}</span>
              </div>
              {hospital.emergency_capable && (
                <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-red-50 text-red-600 text-sm font-medium">
                  <Siren className="w-4 h-4" />
                  Emergency
                </div>
              )}
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <InfoItem icon={Clock} label="Hours" value={hospital.operating_hours || '24/7'} />
            <InfoItem icon={Phone} label="Phone" value={hospital.phone || 'N/A'} />
            <InfoItem icon={Mail} label="Email" value={hospital.email || 'N/A'} />
            <InfoItem icon={Bed} label="Available Beds" value={hospital.available_beds != null ? `${hospital.available_beds} / ${hospital.bed_capacity}` : 'N/A'} />
          </div>

          {/* Specialties */}
          {hospital.specialties?.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">Specialties</h3>
              <div className="flex flex-wrap gap-2">
                {hospital.specialties.map((s) => (
                  <Badge key={s} variant="secondary" className="rounded-full">{s}</Badge>
                ))}
              </div>
            </div>
          )}

          {/* Facilities */}
          {hospital.facilities?.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-foreground mb-2">Facilities</h3>
              <div className="flex flex-wrap gap-2">
                {hospital.facilities.map((f) => (
                  <Badge key={f} variant="outline" className="rounded-full">{f}</Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Doctors at this hospital */}
      {doctors?.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold text-foreground mb-4">Doctors at {hospital.name}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {doctors.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
      <Icon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
      <div>
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-foreground truncate">{value}</p>
      </div>
    </div>
  );
}