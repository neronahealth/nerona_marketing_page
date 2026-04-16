import { Star, MapPin, Clock, Video, CheckCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DoctorCard({ doctor, onBook, onViewProfile, horizontal = false }) {
  const {
    name = 'Dr. Amina Osei',
    specialty = 'Cardiologist',
    hospital = 'Aga Khan University Hospital',
    city = 'Nairobi',
    rating = 4.8,
    reviewCount = 142,
    photo = null,
    availableToday = true,
    nextSlot = 'Today 3:00 PM',
    consultationFee = 'KES 3,500',
    virtualAvailable = true,
    experience = '12 years',
    verified = true,
  } = doctor || {};

  const initials = name.replace('Dr. ', '').split(' ').map(n => n[0]).join('').slice(0, 2);

  if (horizontal) {
    return (
      <div className="card-patient flex items-center gap-4">
        <div className="relative flex-shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            {photo ? (
              <img src={photo} alt={name} className="w-16 h-16 rounded-2xl object-cover" />
            ) : (
              <span className="text-xl font-bold text-primary">{initials}</span>
            )}
          </div>
          {verified && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center border-2 border-card">
              <CheckCircle className="w-3 h-3 text-white" />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-sm font-bold text-foreground font-jakarta">{name}</h3>
              <p className="text-xs text-primary font-medium">{specialty}</p>
              <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3" />
                <span>{city}</span>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-400" fill="currentColor" />
                <span className="text-sm font-bold text-foreground">{rating}</span>
              </div>
              <p className="text-xs text-muted-foreground">{reviewCount} reviews</p>
            </div>
          </div>
        </div>
        <Button size="sm" className="rounded-xl text-xs flex-shrink-0" onClick={onBook}>Book</Button>
      </div>
    );
  }

  return (
    <div className="card-patient flex flex-col">
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="relative flex-shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            {photo ? (
              <img src={photo} alt={name} className="w-16 h-16 rounded-2xl object-cover" />
            ) : (
              <span className="text-xl font-bold text-primary">{initials}</span>
            )}
          </div>
          {verified && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center border-2 border-card">
              <CheckCircle className="w-3 h-3 text-white" />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-foreground font-jakarta leading-tight">{name}</h3>
          <p className="text-xs font-semibold text-primary mt-0.5">{specialty}</p>
          <p className="text-xs text-muted-foreground mt-0.5 truncate">{hospital}</p>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400" fill="currentColor" />
              <span className="text-sm font-bold text-foreground">{rating}</span>
              <span className="text-xs text-muted-foreground">({reviewCount})</span>
            </div>
            {virtualAvailable && (
              <span className="flex items-center gap-1 text-xs text-blue-600 font-medium">
                <Video className="w-3 h-3" /> Virtual
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Meta info */}
      <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5" />
          {city}
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          {experience} exp.
        </div>
      </div>

      {/* Availability */}
      <div className={`flex items-center gap-2 px-3 py-2 rounded-xl mb-4 text-xs font-medium ${
        availableToday ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-secondary text-muted-foreground'
      }`}>
        <Calendar className="w-3.5 h-3.5" />
        {availableToday ? `Next: ${nextSlot}` : 'No slots today'}
      </div>

      {/* Fee + Actions */}
      <div className="flex items-center justify-between pt-2 border-t border-border">
        <div>
          <p className="text-[10px] text-muted-foreground">Consultation</p>
          <p className="text-sm font-bold text-foreground">{consultationFee}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="rounded-xl text-xs" onClick={onViewProfile}>Profile</Button>
          <Button size="sm" className="rounded-xl text-xs" onClick={onBook}>
            <Calendar className="w-3.5 h-3.5 mr-1" />
            Book
          </Button>
        </div>
      </div>
    </div>
  );
}