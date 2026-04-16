import { motion } from 'framer-motion';
import { Phone, Truck, MapPin, Hospital, CheckCircle } from 'lucide-react';

const steps = [
  { key: 'received', label: 'Received', icon: Phone },
  { key: 'dispatched', label: 'Dispatched', icon: Truck },
  { key: 'en-route', label: 'En Route', icon: MapPin },
  { key: 'on-scene', label: 'On Scene', icon: MapPin },
  { key: 'transporting', label: 'Transporting', icon: Truck },
  { key: 'completed', label: 'Completed', icon: Hospital },
];

export default function EmergencyStatusIndicator({ status = 'dispatched', eta = null }) {
  const currentIndex = steps.findIndex(s => s.key === status);

  return (
    <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-red-700 flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          Emergency Response Active
        </span>
        {eta && (
          <span className="text-xs font-bold text-red-600 bg-red-100 px-2.5 py-1 rounded-full">
            ETA: {eta}
          </span>
        )}
      </div>

      {/* Progress Steps */}
      <div className="flex items-center gap-0 mt-3">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isDone = i < currentIndex;
          const isCurrent = i === currentIndex;
          const isUpcoming = i > currentIndex;

          return (
            <div key={step.key} className="flex items-center flex-1">
              <div className="flex flex-col items-center gap-1">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-500 ${
                  isDone ? 'bg-red-500 text-white' :
                  isCurrent ? 'bg-red-600 text-white ring-4 ring-red-200' :
                  'bg-white border-2 border-red-200 text-red-300'
                }`}>
                  {isDone ? (
                    <CheckCircle className="w-3.5 h-3.5" />
                  ) : (
                    <Icon className={`w-3 h-3 ${isCurrent ? 'animate-pulse' : ''}`} />
                  )}
                </div>
                <span className={`text-[9px] font-medium text-center leading-tight ${
                  isDone || isCurrent ? 'text-red-700' : 'text-red-300'
                }`}>
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-0.5 mb-4 transition-all duration-500 ${
                  i < currentIndex ? 'bg-red-400' : 'bg-red-100'
                }`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}