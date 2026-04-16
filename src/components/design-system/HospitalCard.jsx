import { Star, MapPin, ShieldCheck, Phone, Clock, ExternalLink, Navigation, Siren } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HospitalCard({ hospital, onViewDetails, onGetDirections, onCall, onBook, horizontal = false }) {
  const {
    name = 'Aga Khan University Hospital',
    city = 'Nairobi',
    address = 'Third Parklands Avenue',
    rating = 4.8,
    reviewCount = 892,
    image = 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400',
    verified = true,
    emergencyCapable = true,
    departments = ['Cardiology', 'Oncology', 'Neurology'],
    workingHours = '24/7',
    phone = '+254 20 3662000',
    distance = '2.4 km',
    beds = 254,
  } = hospital || {};

  if (horizontal) {
    return (
      <div className="card-patient flex gap-4">
        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            {verified && <ShieldCheck className="w-3.5 h-3.5 text-primary flex-shrink-0" />}
            <h3 className="text-sm font-bold text-foreground truncate font-jakarta">{name}</h3>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1.5">
            <MapPin className="w-3 h-3" />
            <span>{city}</span>
            {distance && <span className="text-primary font-medium">· {distance}</span>}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400" fill="currentColor" />
              <span className="text-sm font-bold text-foreground">{rating}</span>
            </div>
            {emergencyCapable && (
              <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-600">
                <Siren className="w-2.5 h-2.5" /> Emergency
              </span>
            )}
          </div>
        </div>
        <Button size="sm" className="rounded-xl text-xs flex-shrink-0 self-center" onClick={onBook}>Book</Button>
      </div>
    );
  }

  return (
    <div className="card-patient p-0 overflow-hidden">
      {/* Image */}
      <div className="aspect-[16/9] overflow-hidden relative">
        <img src={image} alt={name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-3 left-3 flex gap-1.5">
          {verified && (
            <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full bg-white/90 backdrop-blur text-primary">
              <ShieldCheck className="w-3 h-3" /> Verified
            </span>
          )}
          {emergencyCapable && (
            <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full bg-red-600 text-white">
              <Siren className="w-3 h-3" /> 24/7 ER
            </span>
          )}
        </div>
        {distance && (
          <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-1 rounded-full bg-black/50 text-white backdrop-blur">
            {distance}
          </span>
        )}
      </div>

      <div className="p-4">
        {/* Name & Rating */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-sm font-bold text-foreground font-jakarta leading-tight">{name}</h3>
          <div className="flex items-center gap-1 flex-shrink-0">
            <Star className="w-3.5 h-3.5 text-amber-400" fill="currentColor" />
            <span className="text-sm font-bold text-foreground">{rating}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
          <MapPin className="w-3.5 h-3.5" />
          {address}, {city}
        </div>

        {/* Departments */}
        <div className="flex flex-wrap gap-1 mb-3">
          {departments.slice(0, 3).map(dept => (
            <span key={dept} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">{dept}</span>
          ))}
          {departments.length > 3 && (
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">+{departments.length - 3}</span>
          )}
        </div>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 pt-2 border-t border-border">
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{workingHours}</span>
          <span>{reviewCount} reviews</span>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-3 gap-1.5">
          <Button variant="outline" size="sm" className="rounded-xl text-xs col-span-1" onClick={onGetDirections}>
            <Navigation className="w-3.5 h-3.5" />
          </Button>
          <Button variant="outline" size="sm" className="rounded-xl text-xs col-span-1" onClick={onCall}>
            <Phone className="w-3.5 h-3.5" />
          </Button>
          <Button size="sm" className="rounded-xl text-xs col-span-1" onClick={onBook}>Book</Button>
        </div>
      </div>
    </div>
  );
}