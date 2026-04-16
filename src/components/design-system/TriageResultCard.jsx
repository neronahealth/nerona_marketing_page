import { Brain, ChevronRight, Download, Calendar, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import UrgencyBadge from './UrgencyBadge';

const confidenceLevels = {
  high: { label: 'High Confidence', color: 'text-green-600', bg: 'bg-green-50', width: '85%' },
  medium: { label: 'Moderate Confidence', color: 'text-amber-600', bg: 'bg-amber-50', width: '62%' },
  low: { label: 'Low Confidence', color: 'text-red-600', bg: 'bg-red-50', width: '40%' },
};

export default function TriageResultCard({ result, onSchedule, onDownload }) {
  const {
    symptoms = ['Chest pain', 'Shortness of breath', 'Fatigue'],
    assessment = 'Possible cardiac event. Immediate evaluation recommended.',
    urgencyLevel = 'urgent',
    recommendedActions = ['Visit emergency room immediately', 'Avoid strenuous activity', 'Take prescribed medication'],
    confidence = 'high',
    assessedAt = '2024-12-10 14:30',
    assessmentId = 'TRG-0892',
    specialty = 'Cardiology',
  } = result || {};

  const conf = confidenceLevels[confidence] || confidenceLevels.medium;

  return (
    <div className="card-ai relative overflow-hidden">
      {/* AI Gradient Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-[10px] text-violet-500 font-semibold uppercase tracking-wide">AI Triage · {assessmentId}</p>
            <p className="text-xs text-muted-foreground">{assessedAt}</p>
          </div>
        </div>
        <UrgencyBadge level={urgencyLevel} />
      </div>

      {/* Symptoms */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Reported Symptoms</p>
        <div className="flex flex-wrap gap-1.5">
          {symptoms.map((symptom) => (
            <span key={symptom} className="text-xs px-2.5 py-1 bg-white/70 border border-violet-200 text-violet-700 rounded-full font-medium">
              {symptom}
            </span>
          ))}
        </div>
      </div>

      {/* AI Assessment */}
      <div className="bg-white/60 border border-violet-200/60 rounded-xl p-3 mb-4">
        <div className="flex items-start gap-2">
          <Info className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-semibold text-foreground mb-0.5">AI Assessment</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{assessment}</p>
            <p className="text-xs text-violet-600 font-medium mt-1">Refer to: {specialty}</p>
          </div>
        </div>
      </div>

      {/* Confidence */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-xs font-semibold text-foreground">AI Confidence</p>
          <span className={`text-xs font-semibold ${conf.color}`}>{conf.label}</span>
        </div>
        <div className="h-2 bg-white/60 rounded-full border border-violet-200/60 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-violet-400 to-indigo-500 rounded-full transition-all duration-700"
            style={{ width: conf.width }}
          />
        </div>
      </div>

      {/* Recommended Actions */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Recommended Actions</p>
        <ul className="space-y-1.5">
          {recommendedActions.map((action, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
              <CheckCircle className="w-3.5 h-3.5 text-violet-500 flex-shrink-0 mt-0.5" />
              {action}
            </li>
          ))}
        </ul>
      </div>

      {/* Disclaimer */}
      <div className="flex items-start gap-2 p-2.5 rounded-lg bg-amber-50/60 border border-amber-200/60 mb-4">
        <AlertCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
        <p className="text-[10px] text-amber-700 leading-relaxed">
          AI assessments are not a substitute for professional medical advice. Always consult a qualified healthcare provider.
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1 rounded-xl text-xs" onClick={onDownload}>
          <Download className="w-3.5 h-3.5 mr-1.5" />
          Report
        </Button>
        <Button size="sm" className="flex-1 rounded-xl text-xs btn-ai-triage" onClick={onSchedule}>
          <Calendar className="w-3.5 h-3.5 mr-1.5" />
          Schedule Visit
        </Button>
      </div>
    </div>
  );
}