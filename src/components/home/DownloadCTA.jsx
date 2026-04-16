import { Link } from 'react-router-dom';
import { Download, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DownloadCTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 sm:p-12 lg:p-16 overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

        <div className="relative grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Get the Full Neurona Experience
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-6">
              Download our mobile app to access all features, AI symptom evaluation, appointment booking, emergency services, and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link to="/download">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2 h-12 px-6 rounded-xl shadow-lg">
                  <Download className="w-5 h-5" />
                  Download for iOS
                </Button>
              </Link>
              <Link to="/download">
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 h-12 px-6 rounded-xl bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Download className="w-5 h-5" />
                  Download for Android
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-6">
              {[
                { icon: Shield, text: 'HIPAA Secure' },
                { icon: Zap, text: 'Instant access' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-primary-foreground/80">
                  <Icon className="w-4 h-4" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-64 h-[500px] rounded-[3rem] bg-foreground/90 p-2 shadow-2xl">
                <div className="w-full h-full rounded-[2.5rem] bg-background overflow-hidden flex items-center justify-center">
                  <div className="text-center px-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🏥</span>
                    </div>
                    <p className="font-semibold text-foreground">Neurona</p>
                    <p className="text-xs text-muted-foreground mt-1">Healthcare in your pocket</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}