import { Link } from 'react-router-dom';
import { Search, Siren, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              AI-Powered Healthcare Access
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
              Your Health,{' '}
              <span className="text-primary">Intelligently</span>{' '}
              Connected
            </h1>

            <p className="mt-5 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Navigate Africa's healthcare with confidence. AI-powered symptom evaluation, verified providers, and emergency coordination — all in one platform.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/FindCare">
                <Button size="lg" className="w-full sm:w-auto gap-2 h-12 px-6 text-base rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                  <Search className="w-4 h-4" />
                  Find Care Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/Ambulance">
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 h-12 px-6 text-base rounded-xl border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all">
                  <Siren className="w-4 h-4" />
                  Request Ambulance
                </Button>
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-foreground">50+</span>
                <span>Verified<br />Hospitals</span>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-foreground">200+</span>
                <span>Specialist<br />Doctors</span>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-foreground">5</span>
                <span>African<br />Cities</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800"
                  alt="Healthcare in Africa"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl shadow-xl border border-border p-4 max-w-[220px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">AI Match Found</p>
                    <p className="text-sm font-semibold text-foreground">Best hospital nearby</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}