import { Star, ShieldCheck, Video, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function DoctorCard({ doctor }) {
  return (
    <div className="group bg-card rounded-2xl border border-border/50 p-5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
      <div className="flex gap-4">
        <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
          <img
            src={doctor.image_url || 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200'}
            alt={doctor.full_name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="font-semibold text-foreground truncate">{doctor.full_name}</h3>
            {doctor.verified && <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />}
          </div>
          <p className="text-sm text-primary font-medium">{doctor.specialty}</p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
            <MapPin className="w-3 h-3" />
            {doctor.hospital_name}
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Star className="w-3.5 h-3.5 text-amber-500" fill="currentColor" />
          <span className="font-medium text-foreground">{doctor.rating || 'N/A'}</span>
        </span>
        <span>{doctor.years_experience} yrs exp</span>
        {doctor.available_for_virtual && (
          <span className="flex items-center gap-1 text-primary">
            <Video className="w-3.5 h-3.5" /> Virtual
          </span>
        )}
      </div>

      {doctor.languages?.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {doctor.languages.map((lang) => (
            <Badge key={lang} variant="outline" className="text-[10px] rounded-full px-2 py-0">
              {lang}
            </Badge>
          ))}
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-foreground">
          {doctor.consultation_fee ? `₦${doctor.consultation_fee.toLocaleString()}` : 'Contact for fee'}
        </span>
        <Link to={`/BookAppointment?doctorId=${doctor.id}`}>
          <Button size="sm" className="rounded-xl gap-1 text-xs h-8">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
}