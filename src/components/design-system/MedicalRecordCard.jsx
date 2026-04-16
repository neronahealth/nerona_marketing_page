import { FileText, Download, Share2, ChevronRight, Stethoscope, FlaskConical, Scan, Pill } from 'lucide-react';
import { Button } from '@/components/ui/button';

const recordTypes = {
  consultation: { label: 'Consultation', icon: Stethoscope, color: 'text-blue-600', bg: 'bg-blue-50' },
  lab: { label: 'Lab Result', icon: FlaskConical, color: 'text-violet-600', bg: 'bg-violet-50' },
  imaging: { label: 'Imaging', icon: Scan, color: 'text-amber-600', bg: 'bg-amber-50' },
  prescription: { label: 'Prescription', icon: Pill, color: 'text-green-600', bg: 'bg-green-50' },
  report: { label: 'Medical Report', icon: FileText, color: 'text-primary', bg: 'bg-primary/10' },
};

export default function MedicalRecordCard({ record, onView, onDownload, onShare, compact = false }) {
  const {
    type = 'consultation',
    title = 'General Consultation',
    date = 'November 20, 2024',
    doctor = 'Dr. Amina Osei',
    facility = 'Aga Khan University Hospital',
    summary = 'Routine check-up. Blood pressure slightly elevated. Prescribed antihypertensive medication.',
    recordId = 'REC-0451',
    isConfidential = false,
  } = record || {};

  const typeConfig = recordTypes[type] || recordTypes.report;
  const Icon = typeConfig.icon;

  if (compact) {
    return (
      <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/60 hover:border-primary/20 transition-all cursor-pointer" onClick={onView}>
        <div className={`w-9 h-9 rounded-xl ${typeConfig.bg} flex items-center justify-center flex-shrink-0`}>
          <Icon className={`w-4.5 h-4.5 ${typeConfig.color}`} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">{title}</p>
          <p className="text-xs text-muted-foreground">{date} · {doctor}</p>
        </div>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${typeConfig.bg} ${typeConfig.color}`}>
          {typeConfig.label}
        </span>
        <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
      </div>
    );
  }

  return (
    <div className="card-patient">
      <div className="flex items-start gap-3 mb-3">
        <div className={`w-11 h-11 rounded-xl ${typeConfig.bg} flex items-center justify-center flex-shrink-0`}>
          <Icon className={`w-5 h-5 ${typeConfig.color}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-bold text-foreground truncate font-jakarta">{title}</h3>
            {isConfidential && (
              <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-600 flex-shrink-0">PHI</span>
            )}
          </div>
          <p className="text-[10px] text-muted-foreground mt-0.5">{recordId}</p>
        </div>
      </div>

      <div className="space-y-1.5 mb-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <span><strong className="text-foreground">Date:</strong> {date}</span>
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${typeConfig.bg} ${typeConfig.color}`}>
            {typeConfig.label}
          </span>
        </div>
        <div><strong className="text-foreground">Provider:</strong> {doctor}</div>
        <div><strong className="text-foreground">Facility:</strong> {facility}</div>
      </div>

      {summary && (
        <p className="text-xs text-muted-foreground bg-secondary/50 rounded-xl p-3 mb-4 leading-relaxed">{summary}</p>
      )}

      <div className="flex gap-2 pt-2 border-t border-border">
        <Button variant="outline" size="sm" className="flex-1 rounded-xl text-xs" onClick={onView}>
          <FileText className="w-3.5 h-3.5 mr-1.5" />
          View
        </Button>
        <Button variant="outline" size="sm" className="rounded-xl text-xs" onClick={onDownload}>
          <Download className="w-3.5 h-3.5" />
        </Button>
        <Button variant="outline" size="sm" className="rounded-xl text-xs" onClick={onShare}>
          <Share2 className="w-3.5 h-3.5" />
        </Button>
      </div>
    </div>
  );
}