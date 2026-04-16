import { useState } from 'react';
import { Search, X, Plus, ChevronRight, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const commonSymptoms = [
  'Headache', 'Fever', 'Cough', 'Chest Pain', 'Shortness of Breath',
  'Fatigue', 'Nausea', 'Vomiting', 'Abdominal Pain', 'Dizziness',
  'Joint Pain', 'Back Pain', 'Sore Throat', 'Runny Nose', 'Rash',
  'Blurred Vision', 'Hearing Loss', 'Heart Palpitations', 'Swelling', 'Numbness',
];

const severityConfig = [
  { value: 1, label: 'Very Mild', color: 'bg-green-400' },
  { value: 2, label: 'Mild', color: 'bg-green-300' },
  { value: 3, label: 'Moderate', color: 'bg-yellow-400' },
  { value: 4, label: 'Severe', color: 'bg-orange-500' },
  { value: 5, label: 'Very Severe', color: 'bg-red-600' },
];

export default function SymptomInput({ onSubmit }) {
  const [search, setSearch] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [severity, setSeverity] = useState(3);
  const [duration, setDuration] = useState('');

  const filtered = commonSymptoms.filter(s =>
    s.toLowerCase().includes(search.toLowerCase()) &&
    !selectedSymptoms.includes(s)
  );

  const addSymptom = (symptom) => {
    setSelectedSymptoms(prev => [...prev, symptom]);
    setSearch('');
  };

  const removeSymptom = (symptom) => {
    setSelectedSymptoms(prev => prev.filter(s => s !== symptom));
  };

  const currentSeverity = severityConfig.find(s => s.value === severity);

  const handleSubmit = () => {
    if (onSubmit && selectedSymptoms.length > 0) {
      onSubmit({ symptoms: selectedSymptoms, severity, duration });
    }
  };

  return (
    <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl border border-violet-200/60 p-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
          <Search className="w-4 h-4 text-white" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-foreground">Describe Your Symptoms</h3>
          <p className="text-xs text-muted-foreground">Our AI will assess your condition</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-3">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search symptoms..."
          className="pl-9 pr-10 rounded-xl border-violet-200 bg-white/80 text-sm"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-violet-400 hover:text-violet-600">
          <Mic className="w-4 h-4" />
        </button>
      </div>

      {/* Search Results */}
      {search && (
        <div className="mb-3 bg-white/80 border border-violet-200/60 rounded-xl overflow-hidden max-h-36 overflow-y-auto">
          {filtered.slice(0, 6).map(s => (
            <button
              key={s}
              onClick={() => addSymptom(s)}
              className="flex items-center justify-between w-full px-3 py-2 text-sm text-left hover:bg-violet-50 transition-colors"
            >
              {s}
              <Plus className="w-4 h-4 text-violet-400" />
            </button>
          ))}
          {filtered.length === 0 && (
            <button onClick={() => addSymptom(search)} className="flex items-center gap-2 w-full px-3 py-2 text-sm text-violet-600 hover:bg-violet-50">
              <Plus className="w-4 h-4" /> Add "{search}"
            </button>
          )}
        </div>
      )}

      {/* Common Symptoms Quick Select */}
      {!search && (
        <div className="mb-3">
          <p className="text-xs text-muted-foreground mb-2">Common symptoms:</p>
          <div className="flex flex-wrap gap-1.5">
            {commonSymptoms.slice(0, 8).map(s => (
              <button
                key={s}
                onClick={() => addSymptom(s)}
                disabled={selectedSymptoms.includes(s)}
                className={`text-xs px-2.5 py-1 rounded-full border transition-all ${
                  selectedSymptoms.includes(s)
                    ? 'bg-violet-100 border-violet-200 text-violet-400 cursor-not-allowed'
                    : 'bg-white border-violet-200 text-violet-700 hover:bg-violet-50 hover:border-violet-300'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Selected Symptoms */}
      {selectedSymptoms.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-semibold text-foreground mb-2">Selected ({selectedSymptoms.length}):</p>
          <div className="flex flex-wrap gap-1.5">
            {selectedSymptoms.map(s => (
              <span key={s} className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-violet-600 text-white font-medium">
                {s}
                <button onClick={() => removeSymptom(s)} className="hover:opacity-70">
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Severity Slider */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-semibold text-foreground">Severity</p>
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full text-white ${currentSeverity?.color || 'bg-gray-400'}`}>
            {currentSeverity?.label}
          </span>
        </div>
        <div className="flex items-center gap-1">
          {severityConfig.map(s => (
            <button
              key={s.value}
              onClick={() => setSeverity(s.value)}
              className={`flex-1 h-2.5 rounded-full transition-all ${
                s.value <= severity ? s.color : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[10px] text-muted-foreground">Mild</span>
          <span className="text-[10px] text-muted-foreground">Severe</span>
        </div>
      </div>

      {/* Duration */}
      <div className="mb-5">
        <p className="text-xs font-semibold text-foreground mb-2">How long have you had these symptoms?</p>
        <div className="flex flex-wrap gap-1.5">
          {['< 1 hour', 'A few hours', '1-2 days', '3-7 days', '1-2 weeks', '> 2 weeks'].map(d => (
            <button
              key={d}
              onClick={() => setDuration(d)}
              className={`text-xs px-2.5 py-1 rounded-full border transition-all ${
                duration === d
                  ? 'bg-violet-600 border-violet-600 text-white'
                  : 'bg-white border-violet-200 text-violet-700 hover:bg-violet-50'
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <Button
        onClick={handleSubmit}
        disabled={selectedSymptoms.length === 0}
        className="w-full rounded-xl font-semibold btn-ai-triage disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Analyze with AI
        <ChevronRight className="w-4 h-4 ml-1.5" />
      </Button>
    </div>
  );
}