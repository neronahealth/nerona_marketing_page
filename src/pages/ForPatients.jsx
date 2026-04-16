import { Link } from 'react-router-dom';
import { Search, Calendar, Building2, MessageCircle, Download, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Search,
    title: 'AI-Powered Care Matching',
    description: 'Describe your symptoms and our AI matches you with the best hospital based on specialty, proximity, and availability.',
  },
  {
    icon: Calendar,
    title: 'Easy Appointment Booking',
    description: 'Schedule physical or virtual consultations directly with verified specialists, no phone calls needed.',
  },
  {
    icon: Building2,
    title: 'Verified Provider Directory',
    description: 'Access 50+ verified hospitals and 200+ specialist doctors across major African cities.',
  },
  {
    icon: MessageCircle,
    title: 'AI Care Navigator',
    description: 'Chat with our AI assistant 24/7 to understand your symptoms and get personalized care guidance.',
  },
];

const benefits = [
  'Find trusted providers instantly',
  'Skip the phone queues',
  'Get AI-powered health guidance',
  'Access emergency services fast',
  'Track your health journey',
  'Secure and private',
];

export default function ForPatients() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
                For Patients
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
                Healthcare Made Simple
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Navigate Africa's healthcare system with confidence. Find the right care, book appointments, and access emergency services, all from one app.
              </p>
              <Link to="/download">
                <Button size="lg" className="rounded-xl gap-2 shadow-lg shadow-primary/20">
                  <Download className="w-5 h-5" />
                  Download App
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800"
                  alt="Patient using Neurona"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-foreground text-center mb-10">What You Can Do</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-secondary/30 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-10">Why Patients Love Neurona</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 bg-card rounded-xl p-4 border border-border">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">Start your journey to better care</h2>
        <p className="text-muted-foreground mb-6">Download Neurona and access healthcare the smart way.</p>
        <Link to="/download">
          <Button size="lg" className="rounded-xl gap-2 shadow-lg shadow-primary/20">
            <Download className="w-5 h-5" />
            Get the App
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </section>
    </div>
  );
}