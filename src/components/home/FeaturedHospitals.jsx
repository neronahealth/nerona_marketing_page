import { Link } from 'react-router-dom';
import { Star, MapPin, ShieldCheck, Download, ArrowRight } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

export default function FeaturedHospitals() {
  const { data: hospitals, isLoading } = useQuery({
    queryKey: ['featured-hospitals'],
    queryFn: () => base44.entities.Hospital.filter({ verified: true }, '-rating', 4),
  });

  return (
    <section className="bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Trusted Healthcare Partners
            </h2>
            <p className="mt-1 text-muted-foreground">
              Verified facilities across Africa, full access in the app
            </p>
          </div>
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
            : (hospitals || []).map((hospital) => (
                <div
                  key={hospital.id}
                  className="group rounded-2xl bg-card border border-border/50 overflow-hidden hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={hospital.image_url || 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400'}
                      alt={hospital.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                      <Link to="/download">
                        <Button size="sm" className="rounded-full gap-1.5 text-xs">
                          <Download className="w-3 h-3" /> View in App
                        </Button>
                      </Link>
                    </div>
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
                </div>
              ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link to="/download">
            <Button variant="outline" className="rounded-xl gap-2">
              Download App for Full Directory
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}