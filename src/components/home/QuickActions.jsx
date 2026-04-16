import { Link } from 'react-router-dom';
import { Search, Building2, Calendar, Siren, MessageCircle, Stethoscope, Download, ArrowRight, Ambulance } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const actions = [
  {
    title: 'Find Care Now',
    description: 'AI evaluates your symptoms to recommend the best facility for your needs.',
    icon: Search,
    color: 'bg-primary/10 text-primary',
    preview: 'Get matched with verified hospitals based on your symptoms and location.',
    path: '/FindCare',
    btnLabel: 'Try It Now',
    btnIcon: Search,
  },
  {
    title: 'Hospital Directory',
    description: 'Browse verified hospitals by specialty and location across Africa.',
    icon: Building2,
    color: 'bg-blue-50 text-blue-600',
    preview: '50+ verified hospitals with real-time availability.',
    path: '/download',
    btnLabel: 'Download App to Access',
    btnIcon: Download,
  },
  {
    title: 'Book Appointment',
    description: 'Schedule physical or virtual consultations with specialists.',
    icon: Calendar,
    color: 'bg-purple-50 text-purple-600',
    preview: 'Direct scheduling with confirmed appointment slots.',
    path: '/download',
    btnLabel: 'Download App to Book',
    btnIcon: Download,
  },
  {
    title: 'Emergency Ambulance',
    description: 'Request emergency transport with smart dispatch coordination.',
    icon: Siren,
    color: 'bg-red-50 text-red-600',
    preview: 'Coordinated dispatch with hospital notification.',
    path: '/Ambulance',
    btnLabel: 'Request Now',
    btnIcon: Ambulance,
  },
  {
    title: 'AI Care Navigator',
    description: 'Chat with AI to understand your care pathway and options.',
    icon: MessageCircle,
    color: 'bg-emerald-50 text-emerald-600',
    preview: 'Get personalized care guidance 24/7.',
    path: '/CareNavigator',
    btnLabel: 'Try It Now',
    btnIcon: MessageCircle,
  },
  {
    title: 'Find a Doctor',
    description: 'Search specialists by expertise, availability and reviews.',
    icon: Stethoscope,
    color: 'bg-amber-50 text-amber-600',
    preview: '200+ verified specialists across all major specialties.',
    path: '/download',
    btnLabel: 'Download App to Search',
    btnIcon: Download,
  },
];

export default function QuickActions() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
          Everything You Need for Better Care
        </h2>
        <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
          Access AI-powered healthcare navigation, trusted providers, and emergency services, all from our mobile app.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {actions.map((action, i) => {
          const Icon = action.icon;
          return (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1">
                {action.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {action.description}
              </p>
              <p className="text-xs text-muted-foreground/70 mb-4 pb-4 border-b border-border">
                {action.preview}
              </p>
              <Link to={action.path} onClick={() => window.scrollTo(0, 0)}>
                <Button variant="outline" size="sm" className="w-full rounded-xl gap-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                  {(() => { const BtnIcon = action.btnIcon; return <BtnIcon className="w-3.5 h-3.5" />; })()}
                  {action.btnLabel}
                </Button>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="mt-12 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-primary/5 border border-primary/10">
          <div className="text-left">
            <h3 className="font-semibold text-foreground">Ready to get started?</h3>
            <p className="text-sm text-muted-foreground">Download the Neurona app for full access to all features.</p>
          </div>
          <Link to="/download">
            <Button className="rounded-xl gap-2 shadow-lg shadow-primary/20">
              <Download className="w-4 h-4" />
              Get Started on Mobile
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}