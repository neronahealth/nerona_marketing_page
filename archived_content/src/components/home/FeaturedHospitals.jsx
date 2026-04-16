import { Link } from 'react-router-dom';
import { Star, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@/components/ui/skeleton';

export default function FeaturedHospitals() {
  const { data: hospitals, isLoading } = useQuery({
    queryKey: ['featured-hospitals'],
    queryFn: () => base44.entities.Hospital.filter({ verified: true }, '-rating', 4),
  });

  return (
    <section className="bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Top Verified Hospitals
            </h2>
            <p className="mt-1 text-muted-foreground">
              Trusted facilities across Africa
            </p>
          </div>
          <Link
            to="/Directory"
            className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-2xl bg-card border border-border p-4 space-y-3">
                  <Skeleton className="h-36 rounded-xl" />
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))
            : hospitals?.map((hospital) => (
                <Link
                  key={hospital.id}
                  to={`/Directory?hospital=${hospital.id}`}
                  className="group rounded-2xl bg-card border border-border/50 overflow-hidden hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={hospital.image_url || 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400'}
                      alt={hospital.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-1.5 mb-1">
                      {hospital.verified && (
                        <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
                      )}
                      <h3 className="text-sm font-semibold text-foreground truncate">
                        {hospital.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                      <MapPin className="w-3 h-3" />
                      {hospital.city}
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-500" fill="currentColor" />
                        <span className="font-medium text-foreground">{hospital.rating}</span>
                      </div>
                      {hospital.emergency_capable && (
                        <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-600 text-[10px] font-medium">
                          Emergency
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
        </div>

        <Link
          to="/Directory"
          className="sm:hidden flex items-center justify-center gap-1 mt-6 text-sm font-medium text-primary"
        >
          View all hospitals <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}