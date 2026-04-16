import { Star, MapPin, ShieldCheck, Bed, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function HospitalCard({ hospital, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={hospital.image_url || 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400'}
          alt={hospital.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-1.5 mb-2">
          {hospital.verified && <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />}
          <h3 className="font-semibold text-foreground truncate">{hospital.name}</h3>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
          <MapPin className="w-3.5 h-3.5" />
          {hospital.address}, {hospital.city}
        </div>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {hospital.specialties?.slice(0, 3).map((s) => (
            <Badge key={s} variant="secondary" className="text-xs font-normal rounded-full">
              {s}
            </Badge>
          ))}
          {hospital.specialties?.length > 3 && (
            <Badge variant="secondary" className="text-xs font-normal rounded-full">
              +{hospital.specialties.length - 3}
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-amber-500" fill="currentColor" />
            <span className="font-medium text-foreground">{hospital.rating || 'N/A'}</span>
          </span>
          {hospital.emergency_capable && (
            <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-600 font-medium">Emergency</span>
          )}
          {hospital.available_beds != null && (
            <span className="flex items-center gap-1">
              <Bed className="w-3.5 h-3.5" />
              {hospital.available_beds} beds
            </span>
          )}
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {hospital.operating_hours || '24/7'}
          </span>
        </div>
      </div>
    </div>
  );
}