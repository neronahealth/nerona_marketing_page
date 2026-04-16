import { Link } from 'react-router-dom';
import { Download, Smartphone, Apple, PlayCircle, CheckCircle2, Star, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const features = [
  'AI-powered symptom evaluation',
  'Verified hospital directory',
  'Easy appointment booking',
  'Emergency ambulance request',
  '24/7 AI Care Navigator',
  'Secure health records',
];

export default function DownloadPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
                <Download className="w-3.5 h-3.5" /> Download App
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
                Get Neurona on Your Phone
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Access AI-powered healthcare navigation, verified providers, and emergency services, all from the palm of your hand.
              </p>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button size="lg" className="h-14 px-6 rounded-xl gap-3 bg-foreground text-background hover:bg-foreground/90">
                  <Apple className="w-6 h-6" />
                  <div className="text-left">
                    <p className="text-[10px] opacity-80">Download on the</p>
                    <p className="text-sm font-semibold">App Store</p>
                  </div>
                </Button>
                <Button size="lg" className="h-14 px-6 rounded-xl gap-3 bg-foreground text-background hover:bg-foreground/90">
                  <PlayCircle className="w-6 h-6" />
                  <div className="text-left">
                    <p className="text-[10px] opacity-80">Get it on</p>
                    <p className="text-sm font-semibold">Google Play</p>
                  </div>
                </Button>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-500" fill="currentColor" />
                  <span className="font-medium text-foreground">4.8</span> rating
                </div>
                <span>•</span>
                <span>10K+ downloads</span>
                <span>•</span>
                <span>Free</span>
              </div>
            </motion.div>

            {/* Phone Mockup */}
            <div className="hidden lg:flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="w-72 h-[580px] rounded-[3rem] bg-foreground p-3 shadow-2xl">
                  <div className="w-full h-full rounded-[2.5rem] bg-background overflow-hidden">
                    <div className="h-full flex flex-col items-center justify-center px-8 text-center">
                      <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <span className="text-4xl">🏥</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Neurona</h3>
                      <p className="text-sm text-muted-foreground">AI-Powered Healthcare Navigation</p>
                      <div className="mt-8 w-full space-y-3">
                        <div className="h-10 bg-primary rounded-xl" />
                        <div className="h-10 bg-secondary rounded-xl" />
                        <div className="h-10 bg-secondary rounded-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-foreground text-center mb-8">What's Inside the App</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="bg-secondary/30 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Shield, text: 'HIPAA Compliant' },
              { icon: Zap, text: 'Lightning Fast' },
              { icon: Smartphone, text: 'iOS & Android' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-muted-foreground">
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center">
        <div className="bg-card rounded-2xl border border-border p-8">
          <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-2">Coming Soon</h3>
          <p className="text-muted-foreground mb-6">
            The Neurona app is currently in development. Sign up to be notified when we launch.
          </p>
          <div className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-xl border border-border bg-background text-sm"
            />
            <Button className="rounded-xl">Notify Me</Button>
          </div>
        </div>
      </section>
    </div>
  );
}