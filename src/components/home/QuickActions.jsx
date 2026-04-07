import { Link } from 'react-router-dom';
import { Search, Building2, Calendar, Siren, MessageCircle, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';

const actions = [
  {
    title: 'Find Care Now',
    description: 'AI evaluates your symptoms to recommend the best facility',
    icon: Search,
    path: '/FindCare',
    color: 'bg-primary/10 text-primary',
  },
  {
    title: 'Hospital Directory',
    description: 'Browse verified hospitals by specialty and location',
    icon: Building2,
    path: '/Directory',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Book Appointment',
    description: 'Schedule physical or virtual consultations',
    icon: Calendar,
    path: '/Directory',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Emergency Ambulance',
    description: 'Request emergency transport with smart dispatch',
    icon: Siren,
    path: '/Ambulance',
    color: 'bg-red-50 text-red-600',
  },
  {
    title: 'AI Care Navigator',
    description: 'Chat with AI to understand your care pathway',
    icon: MessageCircle,
    path: '/CareNavigator',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Find a Doctor',
    description: 'Search specialists by expertise and availability',
    icon: Stethoscope,
    path: '/Directory',
    color: 'bg-amber-50 text-amber-600',
  },
];

export default function QuickActions() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
          How Can We Help You Today?
        </h2>
        <p className="mt-2 text-muted-foreground">
          Choose a service to get started with your healthcare journey
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
            >
              <Link
                to={action.path}
                className="group block p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {action.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {action.description}
                </p>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}